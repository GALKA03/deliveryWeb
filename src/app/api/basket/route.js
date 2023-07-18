import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";

export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();

    return new NextResponse(JSON.stringify({ message: 'GET request to /api/basket' }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}