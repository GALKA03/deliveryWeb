import OdersModel from "../../../models/OdersModel.js";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect();
    const orders = await OdersModel.find(); // Corrected variable name to "orders"
    // console.log('orders', orders);
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export const POST = async (request) => {
  const { customer, phone, method, status, email, details, total, address } = await request.json();

  try {
    await dbConnect();

    const newOrder = new OdersModel({
      customer,
      phone,
      email,
      details,
      total,
      status,
      method,
      address,
    });

    await newOrder.save();
    // console.log('newOrder', newOrder);
    return new NextResponse(JSON.stringify(newOrder), {
      status: 201,
      message: "success"
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: "Database Order is Error", details: err }), { status: 500 });
  }
};