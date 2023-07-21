import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import User from "@/models/User";

export const POST = async (request) => {
  const { email, password } = await request.json();
  try {
    // Find the user with the provided email in the database
    const user = await User.findOne({ email });

    // If the user is not found, return an error response
    if (!user) {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid credentials",
        }),
        {
          status: 401,
        }
      );
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h", // Token will expire in 1 hour
      });

      return new NextResponse(
          JSON.stringify({
        
              message: "Login successful",
                  payload,
          token,
        }),
        {
          status: 200,
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid credentials",
        }),
        {
          status: 401,
        }
      );
    }
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};