
import GithubProvider from "next-auth/providers/github";
 import GoogleProvider from "next-auth/providers/google";
 import CredentialsProvider from "next-auth/providers/credentials";
 import User from "@/models/User";
 import dbConnect from "@/utils/db";
 import bcrypt from "bcryptjs";

// import options from "./options";
 import NextAuth from "next-auth";

// // const handler = NextAuth(options)

// // export { handler as GET, handler as POST }
 const adminEmail = process.env.ADMIN_EMAIL;
     const adminPassword = process.env.ADMIN_PASSWORD;
       
const handler = NextAuth({
   session: {
      strategy: "jwt",
    },
  providers: [
 CredentialsProvider({
   async authorize(credentials, req) {
     

     const { email, password } = credentials;

        if (email === adminEmail && password === adminPassword) {
          // Admin login successful
          return {
            email: adminEmail,
            role: "admin",
            password:adminPassword,
            // Add any other data related to the admin user here
          };
        }  else {
       dbConnect();
       const user = await User.findOne({ email }).select("+password");

       if (!user) {
         throw new Error("Invalid Email or Password");
       }

       const isPasswordMatched = await bcrypt.compare(
         password,
         user.password
       );

       if (!isPasswordMatched) {
         throw new Error("Invalid Email or Password");
       }

       return {
            ...user.toObject(),
            role: user.role || "user",
          };
     }
   },
      }), 
    // Add other providers if needed (e.g., GithubProvider, GoogleProvider
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    
    }),
  ],
callbacks: {
      jwt: async ({ token, user }) => {
        user && (token.user = user);

        return token;
      },
      session: async ({ session, token }) => {
        session.user = token.user;

        // delete password from session
        delete session?.user?.password;

        return session;
      },
    },
    // pages: {
    //   signin: "/signin",
    // },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
    

// const handler = NextAuth({
//    session: {
//       strategy: "jwt",
//     },
//   providers: [
  
//     CredentialsProvider({
//       id: "credentials",
//       name: "Credentials",
//       async authorize(credentials) {
//         // Check if the user is an admin with hardcoded credentials
//        console.log('credentials',credentials)
//         if (credentials.email === "Admin" && credentials.password === "1") {
//           return {
//             id: "admin-id",
//            email: "Admin",
//             role: "admin",
//           };
//         } else {
//           // Check if the user is an independent user using the database
//           await dbConnect();

//           try {
//             const user = await User.findOne({
//               email: credentials.email,
          
//               // Use the username as email for this example
//             });
// console.log('user credential', user)
//             if (user) {
//               const isPasswordCorrect = await bcrypt.compare(
//                 credentials.password,
//                 user.password
//               );

//               if (isPasswordCorrect) {
//                 return {
//             ...user.toObject(),
//             role: user.role || "user",
//           };
//               } else {
//                 throw new Error("Invalid credentials!");
//               }
//             } else {
//               throw new Error("User not found!");
//             }
//           } catch (err) {
//             throw new Error(err.message);
//           }
//         }
//       },
//       profile(profile) {
//         return { role: profile.role ?? "user"};
//       },
//     }), 
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
//   ],
// callbacks: {
//       jwt: async ({ token, user }) => {
//         user && (token.user = user);

//         return token;
//       },
//       session: async ({ session, token }) => {
//         session.user = token.user;

//         // delete password from session
//         delete session?.user?.password;

//         return session;
//       },
//     },
//     pages: {
//       signin: "/signin",
//     },
//     secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };
    