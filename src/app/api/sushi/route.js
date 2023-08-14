import { NextResponse } from "next/server"
import dbConnect from "@/utils/db"
import SushiModel from "@/models/Sushi";

export async function GET(request) {
  
  try {
    // Connect to the database
    await dbConnect();

    // Find all pizzas in the database and return them
    const  sushi = await SushiModel.find();
// if(error) throw new Error(error)
    return new NextResponse(JSON.stringify(sushi), {status:200})
  } catch(error) {
        return new NextResponse.json({error: error.message}, {status:500})
    }

}

export const POST = async (request) => {
  const body = await request.json();

  const newSushi = new SushiModel(body);

  try {
    await dbConnect();

    await newSushi.save();

    return new NextResponse(newSushi, { status: 201, message:"Sushi has been created" });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};