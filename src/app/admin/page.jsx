// "use client"
import React from 'react';
import AdminTabl from "@/components/AdminTabl/AdminTabl";


const Admin =()=> {

  return (
    <section>
      {/* <h1>{session.user.name}</h1> */}
      <AdminTabl /> {/* Render your AdminTabl component */}
    </section>
  );
};

export default Admin;
