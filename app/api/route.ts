import { NextResponse, NextRequest } from "next/server";
export async function GET() {
  return NextResponse.json({
    message: "hello world!",
  });
}
export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({
    data,
  });
}
export async function PUT() {
  return NextResponse.json({
    message: "hello world!",
  });
}
