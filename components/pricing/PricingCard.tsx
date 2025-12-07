"use client";

import React from "react";

export default function PricingCard({
  title,
  price,
  features,
  highlight = false,
  buttonText,
}: {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
}) {
  return (
    <div
      className={`border rounded-lg p-8 bg-white shadow-sm flex flex-col justify-between ${
        highlight ? "border-railBlue shadow-xl scale-[1.03]" : ""
      }`}
    >
      {highlight && (
        <div className="bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-full w-fit mb-4">
          Most Popular
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-4xl font-extrabold text-railBlue mb-6">{price}</p>

        <ul className="space-y-3 text-gray-700">
          {features.map((f, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full mt-8 py-3 rounded-lg font-semibold transition ${
          highlight
            ? "bg-railBlue text-white hover:bg-railBlue/90"
            : "border border-railBlue text-railBlue hover:bg-railBlue/10"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
