import Listing from "@/models/Listing";
import dbConnect from "./dbConnect";

interface SearchParams {
  q?: string;
  category?: string;
  min?: number;
  max?: number;
  sort?: string;
  page?: number;
  boost?: boolean;
}

export async function searchListings(params: SearchParams = {}) {
  await dbConnect();

  const {
    q = "",
    category = "",
    min,
    max,
    sort = "relevance",
    page = 1,
  } = params;

  const PAGE_SIZE = 24;
  const skip = (Number(page) - 1) * PAGE_SIZE;

  let match: any = { isActive: true };

  if (category) match.category = category;
  if (min) match.price = { ...match.price, $gte: Number(min) };
  if (max) match.price = { ...match.price, $lte: Number(max) };

  let pipeline: any[] = [{ $match: match }];

  // TEXT SEARCH
  if (q) {
    pipeline.push({
      $addFields: {
        textScore: {
          $meta: "textScore",
        },
      },
    });

    pipeline.push({
      $match: {
        $text: {
          $search: q,
          $caseSensitive: false,
          $diacriticSensitive: false,
        },
      },
    });
  }

  // CATEGORY RELEVANCE WEIGHTING
  pipeline.push({
    $addFields: {
      relevanceBoost:
        category && category !== ""
          ? {
              $cond: [{ $eq: ["$category", category] }, 2, 1],
            }
          : 1,
    },
  });

  // BOOSTED LISTINGS (PAID)
  pipeline.push({
    $addFields: {
      paidBoost: {
        $cond: [{ $eq: ["$isBoosted", true] }, 5, 0],
      },
    },
  });

  // FINAL SCORE CALCULATION
  pipeline.push({
    $addFields: {
      finalScore: {
        $add: ["$textScore", "$relevanceBoost", "$paidBoost"],
      },
    },
  });

  // SORTING LOGIC
  if (sort === "price_low") {
    pipeline.push({ $sort: { price: 1 } });
  } else if (sort === "price_high") {
    pipeline.push({ $sort: { price: -1 } });
  } else if (sort === "newest") {
    pipeline.push({ $sort: { createdAt: -1 } });
  } else {
    // Default: relevance sort
    pipeline.push({ $sort: { finalScore: -1 } });
  }

  // PAGINATION
  pipeline.push({ $skip: skip });
  pipeline.push({ $limit: PAGE_SIZE });

  const results = await Listing.aggregate(pipeline);

  // COUNT TOTAL FOR PAGINATION
  const total = await Listing.countDocuments(match);

  return {
    results,
    page: Number(page),
    pageSize: PAGE_SIZE,
    total,
    pages: Math.ceil(total / PAGE_SIZE),
  };
}

// SUGGESTED SEARCH TERMS
export function suggestKeywords(query: string): string[] {
  const railTerms = [
    "locomotive",
    "rail car",
    "freight car",
    "tank car",
    "hopper",
    "gondola",
    "boxcar",
    "flatcar",
    "hi-rail",
    "track",
    "ties",
    "ballast",
    "switch",
    "signal",
    "crossing",
    "crane",
    "tamper",
    "welder",
  ];

  return railTerms.filter((term) =>
    term.toLowerCase().includes(query.toLowerCase())
  );
}

// FACET COUNTS (for filters)
export async function getFacets(params: SearchParams = {}) {
  await dbConnect();

  const { q = "", min, max } = params;

  let match: any = { isActive: true };

  if (min) match.price = { ...match.price, $gte: Number(min) };
  if (max) match.price = { ...match.price, $lte: Number(max) };

  if (q) {
    match.$text = {
      $search: q,
      $caseSensitive: false,
    };
  }

  const facets = await Listing.aggregate([
    { $match: match },
    {
      $facet: {
        categories: [
          { $group: { _id: "$category", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
        ],
        priceRanges: [
          {
            $bucket: {
              groupBy: "$price",
              boundaries: [0, 10000, 50000, 100000, 500000, 1000000],
              default: "Other",
              output: { count: { $sum: 1 } },
            },
          },
        ],
      },
    },
  ]);

  return facets[0];
}
