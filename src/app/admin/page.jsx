"use client"

import { useSession } from "next-auth/react"
import { useRouter, redirect } from "next/navigation";
import AdminTabl from "@/components/AdminTabl/AdminTabl";
import React, { useEffect } from "react";
//  import { getServerSession } from "next-auth/next";
// import options from "../api/auth/[...nextauth]/options";

const Admin = async () => {

  //  const router = useRouter();
  // const session = await getServerSession();
  //   console.log('status admin', status)
  //  const session = await getServerSession(options)
// const session = useSession()
//     if (!session) {
//         redirect('/loginAdmin')
//     }

//   console.log('session admin', session);
  //   useEffect(() => {
  //     if (status === "unauthenticated") {
  //       router.push("/admin/login"); // Redirect to the login page if not authenticated
  //     }
  //   }, [status]); // Empty dependency array ensures this effect runs only on mount

  //   if (status === "loading") {
  //     return <p>Loading...</p>;
  //   }

  //   if (status === "unauthenticated") {
  //     return null;
  //   }



    return (
      <section>
        {/* <h1>{session.user.name}</h1> */}
        <AdminTabl /> {/* Render your AdminTabl component */}
      </section>
    );
  }

// };

export default Admin;
