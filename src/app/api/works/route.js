import { NextResponse } from "next/server";

export function GET(req) {
  return NextResponse.json({
    message: "works api getting data",
  });
}
