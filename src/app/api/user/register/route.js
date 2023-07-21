import bcrypt from "bcryptjs";
import User from "@/models/User";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await dbConnect()

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse(newUser, {
      message: "User registered successfully",
    }),
     {
        status: 201,
      };
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
