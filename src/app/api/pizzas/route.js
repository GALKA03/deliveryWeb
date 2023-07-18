import { NextResponse } from "next/server"
import dbConnect from "@/utils/db"
import PizzasModel from "../../../models/Pizzas"

export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Find all pizzas in the database and return them
    const  pizzas = await PizzasModel.find();
// if(error) throw new Error(error)
    return new NextResponse(JSON.stringify(pizzas), {status:200})
  } catch(error) {
        return new NextResponse.json({error: error.message}, {status:500})
    }

}


// export async function POST(request) {
//   // Connect to the database
//   await dbConnect();

//   try {
//     // Parse the JSON body from the client request
//     const data = await request.json();

//     // Create a new pizza in the database with the given data
//     const newPizza = new Pizzas(data);
//     await newPizza.save();

//     return new NextResponse(newPizza, { status: 201 });
//   } catch (error) {
//     return new NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

export const POST = async (request) => {
  const body = await request.json();

  const newPizza = new PizzasModel(body);

  try {
    await dbConnect();

    await newPizza.save();

    return new NextResponse(newPizza, { status: 201, message:"Pizza has been created" });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};