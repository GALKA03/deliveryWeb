import User from "@/models/User";
import dbConnect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();
    console.log("Received request data:", name, email, password);

    await dbConnect();
    console.log("Connected to the database");

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log("Password hashed:", hashedPassword);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User has been saved");

    return new NextResponse(newUser, {
      status: 201,
    });
  } catch (err) {
    console.error("Error:", err.message);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};