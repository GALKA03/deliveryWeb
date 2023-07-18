import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import OrdersModel from "../../../../models/OdersModel";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await dbConnect();

    const order = await OrdersModel.findById(id);

    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { status } = await request.json();

  try {
    await dbConnect();

    const order = await OrdersModel.findById(id);

    if (!order) {
      return new NextResponse("Order not found", { status: 404 });
    }

    order.status = status;
    await order.save();

    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await dbConnect();

    await OrdersModel.findByIdAndDelete(id);

    return new NextResponse("Order has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


