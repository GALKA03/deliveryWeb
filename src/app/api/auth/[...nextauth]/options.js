// // // import { NextAuthOptions } from "next-auth";
//   import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github";
//  import GoogleProvider from "next-auth/providers/google";
// import User from "@/models/User";
// // // // import Admin from "@/models/Admin";
// import dbConnect from "@/utils/db";
//  import bcrypt from "bcryptjs";

// const adminEmail = process.env.ADMIN_EMAIL;
//       const adminPassword = process.env.ADMIN_PASSWORD;
       

// const options = {
//   session: {
//       strategy: "jwt",
//     },
//     providers: [
      
//         CredentialsProvider({
//         credentials: {
//         email: { label: 'email', type: 'email', required: true },
//         password: { label: 'password', type: 'password', required: true },
//       },
//    async authorize(credentials, req) {
//      if (!credentials?.email || !credentials.password) return null;
//      const { email, password } = credentials;

//         if (email === adminEmail && password === adminPassword) {
//           // Admin login successful
//           return {
//             email: adminEmail,
//             role: "admin",
//             password:adminPassword,
//             // Add any other data related to the admin user here
//           };
//         }  else {
//             dbConnect();
            
//        const user = await User.findOne({ email }).select("+password");

//        if (!user) {
//          throw new Error("Invalid Email or Password");
//        }

//        const isPasswordMatched = await bcrypt.compare(
//          password,
//          user.password
//        );

//        if (!isPasswordMatched) {
//          throw new Error("Invalid Email or Password");
//        }

//        return {
//             ...user.toObject(),
//             role: user.role || "user",
//           };
//      }
//    },
//       }),
//     // Add other providers if needed (e.g., GithubProvider, GoogleProvider
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//       profile(profile) {
//         return { role: profile.role ?? "user"};
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       profile(profile) {
//         return { role: profile.role ?? "user"};
//       },
//     }),
//     ],
//     pages: {
//     signin: '/signin'
//   },
// // callbacks: {
// //       jwt: async ({ token, user }) => {
// //         user && (token.user = user);

// //         return token;
// //       },
// //       session: async ({ session, token }) => {
// //         session.user = token.user;

// //         // delete password from session
// //         delete session?.user?.password;

// //         return session;
// //       },
// //     },
//     // pages: {
//     //   signIn: "/",
//     // },
//     secret: process.env.NEXTAUTH_SECRET,

//   }
// export default options
