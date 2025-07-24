import { NextResponse } from "next/server";
import data from "@/data.json";
export async function GET(req: Request, context: any) {
  const { params } = context;
  const user = data.filter((user) => user.name === params.userID);
  return NextResponse.json({
    user: user[0] || null,
  });
}
