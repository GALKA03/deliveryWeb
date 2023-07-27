'use client'
// import GooglePayButton from "@google-pay/button-react"
import React, { useEffect } from "react";
import { useSession } from "next-auth/react"
import BasketCard from '@/components/BasketCard/BasketCard';
import { useRouter } from "next/navigation";
// import createOrder from "../getLib/createOder";

 
const Basket = () => {
const { data: session, status } = useSession()
  console.log('session bascP', session)
  console.log('stat BaskP', status)
  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  
  return (
    <section>
      <BasketCard  />
    </section>
    )
  
  
}
// };

export default Basket;

