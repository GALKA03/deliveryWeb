'use client'
// import GooglePayButton from "@google-pay/button-react"
import React, { useEffect } from "react";
import { useSession } from "next-auth/react"
import BasketCard from '@/components/BasketCard/BasketCard';
import { useRouter } from "next/navigation";
// import createOrder from "../getLib/createOder";

 
const Basket = () => {
  // const { data: session, status } = useSession();
  // const router = useRouter()
  // if (status === "unauthenticated") {
  //   // Corrected syntax for redirect
  //   router.push("/basket/login");
  //   return null; // Add a return statement after redirecting, as the component will no longer be rendered
  // }

  // if (session.user.role === "admin") {
  //   return (
  //     <>
  //       <h1>Admin page</h1>
  //       <p>You can't view this page because you are an Admin.</p>
  //     </>
  //   );
  // } else if (session.user.role === "user") {
    return (
      <section>
        <BasketCard />
      </section>
    );
  }
// }
   
  


export default Basket;

