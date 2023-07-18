import dbConnect from "../../../mongoose/mongoose";
import OderSchema from "../../../models/Oders";
import { NextResponse } from "next/server"


export async function GET(request) {

  try {
    // Connect to the database
    await dbConnect();

    // Find all pizzas in the database and return them
    const  oders = await OderSchema.find();
// if(error) throw new Error(error)
    return NextResponse.json( oders , {status:200})
  } catch(error) {
        return NextResponse.json({error: error.message}, {status:500})
    }

}

// Export the create, read, update, and delete functions
export async function POST(request) {
  // Connect to the database
  await dbConnect();

  try {
    // Parse the JSON body from the client request
    const data = await request.json();

    // Create a new pizza in the database with the given data
    const newOder = new OderSchema(data);
    await newOder.save();

    return new NextResponse(newOder, { status: 201 });
  } catch (error) {
    return new NextResponse.json({ error: error.message }, { status: 500 });
  }
}