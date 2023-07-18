
import dbConnect from "@/mongoose/mongoose";
import Oders from "@/models/Oders";
import { NextResponse } from "next/server"
export async function GET(request, { params }) {
   await dbConnect();

  try {
    const  id  = params.id;
    console.log('id', id)
    const oder = await Oders.findOne({ _id: id });
    // const { searchParams } = request.nextUrl
    // const sort= searchParams.get("sort")
// const id= params.id
    // if (!pizza) {
    //   throw new Error('Pizza not found');
    // }
    return NextResponse.json({ oder}, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
