"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import NavAside from '@/components/navbar/NavAside'
import s from "./page.module.css"
import deliveryMan from "public/deliveryMan.png"
import Nav from '@/components/navbar/Nav'
import AddButton from './admin/add/page';
import { verifyAdminToken, decodeToken } from '@/utils/verifyAdminToken';
export default function Home() {
//  const [isLoggout, setIsLoggout] = useState(true);
// const router = useRouter();
const [isAdmin, setIsAdmin] = useState(false); // Set the isAdmin flag based on the user's admin status
  const router = useRouter();


  const checkAdminStatus = () => {
    const token = localStorage.getItem('token'); // Get the token from local storage or any other source

    // Replace this logic with your own admin check implementation using the token
    const userIsAdmin = token && verifyAdminToken(token); // Call a function to verify the admin token

    setIsAdmin(userIsAdmin);
  };

  useEffect(() => {
    checkAdminStatus();
  }, []);
  return (
    <main >
  <div className="flex relative min-h-screen  items-center justify-between ">
      <NavAside className="w-2/4"/>
      <div className="  w-2/4 hidden sm:block ">
      {!isAdmin && <AddButton className="absolute min-w-min"/> } 
        </div>
        </div>
    </main>
  )
}
 /* <div className={s.imgContainer}>
      <Image src={deliveryMan} alt="deliveryMan"className={s.img} /*layout="responsive"*/ /*width={500} height={400}/>*/
        // </div> */}