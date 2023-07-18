import dbConnect from "../../../mongoose/mongoose";
import Pizzas from "../../../models/Pizzaz";
import { NextResponse } from "next/server"

export async function GET(request) {
  let response;

  try {
    // Connect to the database
    await dbConnect();

    // Find all pizzas in the database and return them
    const  pizzas = await Pizzas.find();
// if(error) throw new Error(error)
    return NextResponse.json( pizzas , {status:200})
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
    const newPizza = new Pizzas(data);
    await newPizza.save();

    return new NextResponse(newPizza, { status: 201 });
  } catch (error) {
    return new NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function GET(request) {
//   let response;
//   try {
//     // Connect to the database
//     await dbConnect();

//     // Find all pizzas in the database and return them
//     const pizzas = await Pizzas.find();
//     // console.log('pizzas', pizzas);

//     response = new Response(JSON.stringify(pizzas));
//   } catch (error) {
//     console.error('Error getting pizzas:', error);
//     response = new Response(null, { status: 500 });
//   }

//   return response;
// }



// export async function GET(request) {
//   await dbConnect();

//   try {
//     const { id } = request.query;

//     if (!id || typeof id !== 'string' || id.trim().length === 0) {
//       return new Response(null, { status: 400 });
//     }

//     const pizza = await Pizzas.findById(id);

//     if (pizza) {
//       return new Response(JSON.stringify(pizza));
//     }

//     return new Response(null, { status: 404 });
//   } catch (error) {
//     return new Response(null, { status: 500 });
//   }
// }


