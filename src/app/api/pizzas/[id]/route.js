import { NextResponse } from "next/server"
import dbConnect from "@/utils/db"
import PizzasModel from "../../../../models/Pizzas"


export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await dbConnect();

    const pizza = await PizzasModel.findById(id);

    return new NextResponse(JSON.stringify(pizza), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await dbConnect();

    await PizzasModel.findByIdAndDelete(id);

    return new NextResponse("Pizza has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const PUT = async (request, { params, body }) => {
  const { id } = params;
  const { quantity } = body;

  try {
    await dbConnect();

    // Use the Mongoose model to find the pizza by ID and update its quantity
    const updatedPizza = await PizzasModel.findByIdAndUpdate(
      id,
      { quantity },
      { new: true } // Return the updated pizza after the update
    );

    if (!updatedPizza) {
      return new NextResponse("Pizza not found", { status: 404 });
    }

    return new NextResponse(
      JSON.stringify({ message: "Pizza has been updated", updatedPizza }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};