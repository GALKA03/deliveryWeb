// export { default } from "next-auth/middleware"

// // Applies next-auth only to matching routes - can be regex
// // Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { matcher: ["/admin/:path*", "/basket/:path*"] }


// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";


// export default withAuth(
  
//   async function middleware(req) {
//     // authorize roles
//     const url = req.nextUrl.pathname;
//     const userRole = req?.nextauth?.token?.user?.role;

//     if (url?.startsWith("/admin") && userRole !== "admin") {
//       return NextResponse.redirect(new URL("/", req.url));
     
   
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => {
//         if (!token) {
//           return false;
//         }
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ["/admin/:path*"],
// };