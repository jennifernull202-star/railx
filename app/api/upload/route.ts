import { NextResponse } from "next/server";
import { s3, S3_BUCKET } from "@/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getToken } from "next-auth/jwt";

export async function POST(req: Request) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { fileType } = await req.json();

  const key = `listings/${token.id}/${Date.now()}.${fileType.split("/")[1]}`;

  const command = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    ContentType: fileType,
  });

  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

  return NextResponse.json({
    uploadUrl,
    fileUrl: `https://${S3_BUCKET}.s3.amazonaws.com/${key}`,
  });
}
