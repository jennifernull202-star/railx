import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1A2F",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 48,
          padding: "40px",
          textAlign: "center",
        }}
      >
        {decodeURIComponent(slug)}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
