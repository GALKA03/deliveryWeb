
"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter, useSearchParams, redirect  } from "next/navigation";
import { useEffect, useState } from "react";



const LoginAdmin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");

  // Redirect to admin page if user is already authenticated as an admin
  // if (session && session.user && session.user.role === "admin") {
  //   router.push("/admin");
  // }
 if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return router.push('/admin/login')
  }
 const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // Sign in with credentials using NextAuth.js
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Do not automatically redirect after successful login
      });

      // Check if the login was successful
      if (result?.error) {
        setError("Invalid credentials");
      } else {
        // Redirect to the admin page after successful login
        router.push("/admin");
      }
    } catch (error) {
      setError("An error occurred during login.");
    }
  };
 
  return (
    <div className="flex flex-col items-center gap-20 pt-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-20 w-72">
        <input
          type="text"
          placeholder="admin@example.com"
          required
          className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
        />
        <input
          type="password"
          placeholder="adminpassword123"
          required
          className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
        />
        <button className="w-full p-5 cursor-pointer bg-green-500 rounded-lg text-white font-bold">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginAdmin;






// const LoginAdmin = () => {
//  const { data: session, status } = useSession();
//   console.log('session basket', session)
//   const router = useRouter();
//   const params = useSearchParams();
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     setError(params.get("error"));
//     setSuccess(params.get("success"));
//   }, [params]);
 
//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     try {
//       // Replace 'your_backend_login_url' with the actual URL for your login endpoint
//       const response = await fetch("/api/admin/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Assuming your backend sends a 'token' property upon successful login
//         const token = data.token;
//         // Do something with the token (e.g., store it in local storage or a cookie)
// localStorage.setItem("authToken", token);
//         // Redirect to the admin page after successful login
//         router.push("/admin");
//       } else {
//         setError("Invalid credentials"); // Handle incorrect login credentials
//       }
//     } catch (error) {
//       setError("An error occurred during login.");
//     }
//   };
   
  
//     return (
//       <div className="flex flex-col items-center gap-20 pt-20">
//         {/* <h1 className="text-gray-400">Welcome Back</h1>
//   <h2 className="text-lg mb-30 text-gray-400">Please sign in to see the dashboard.</h2> */}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-20 w-72">
//           <input
//             type="text"
//             placeholder="admin@example.com"
//             required
//             className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
//           />
//           <input
//             type="password"
//             placeholder="adminpassword123"
//             required
//             className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
//           />
//           <button className="w-full p-5 cursor-pointer bg-green-500 rounded-lg text-white font-bold">
//             Login
//           </button>
          
//           {error && error}
//         </form>
  
  
//       </div>

//     );
  
  

// };
// export default LoginAdmin;