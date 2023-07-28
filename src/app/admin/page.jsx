"use client"

import { useSession } from "next-auth/react"
// import { getServerSession } from "next-auth/next"
// import { useRouter, redirect } from "next/navigation";
import AdminTabl from "@/components/AdminTabl/AdminTabl";
// import  { useEffect } from "react";
//  import { getServerSession } from "next-auth/next";
// import options from "../api/auth/[...nextauth]/options";


const Admin = () => {
  const { data: session } = useSession();

  // Check if the user is not authenticated or not an admin
  if (!session || !session.user || session.user.role !== "admin") {
    // If session or session.user doesn't exist, or the user is not an admin, show an error message
    return <p>Access Denied</p>;
  }

  return (
    <section>
      {/* <h1>{session.user.name}</h1> */}
      <AdminTabl /> {/* Render your AdminTabl component */}
    </section>
  );
};

export default Admin;
