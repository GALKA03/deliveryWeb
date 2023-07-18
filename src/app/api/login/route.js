
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { username, password } = await request.json();
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the provided password
    if (
      username === process.env.ADMIN_USERNAME &&
      (await bcrypt.compare(process.env.ADMIN_PASSWORD, hashedPassword))
    ) {
      const payload = {
        username: username,
        isAdmin: true, // Set the isAdmin flag based on the user's admin status
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET); // Generate a JWT token

      return new NextResponse(
        JSON.stringify({
          message: "Success",
          token: token, // Include the token in the response body
        }),
        {
          status: 201,
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


// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";

// export const POST = async (request) => {
//   const { username, password } = await request.json();
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash the provided password
//     if (
//       username === process.env.ADMIN_USERNAME &&
//       (await bcrypt.compare(process.env.ADMIN_PASSWORD, hashedPassword))
//     ) {
//       const token = await bcrypt.hash(password, 10); // Generate a token using bcrypt
//       return new NextResponse(
//         JSON.stringify({
//           message: "Success",
//           token: token, // Include the token in the response body
//         }),
//         {
//           status: 201,
//         }
//       );
//     } else {
//       return new NextResponse(
//         JSON.stringify({
//           message: "Invalid credentials",
//         }),
//         {
//           status: 401,
//         }
//       );
//     }
//   } catch (err) {
//     return new NextResponse(err.message, {
//       status: 500,
//     });
//   }
// };


