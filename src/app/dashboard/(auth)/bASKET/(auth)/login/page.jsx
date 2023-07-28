"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter, useSearchParams,redirect  } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Login = () => {
 const { data: session, status } = useSession();
//   console.log('session basket', session)
// console.log('status basket', status)
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
//  const { data: session } = useSession({
//         required: true,
//         onUnauthenticated() {
//             redirect('/basket/login/')
//         }
//  })
  // if (!session?.user) return
  

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);
  const userRole = session?.user?.role;
  console.log('roleUser',userRole)
 if (session && session.status === "loading") {
  return <p>Loading...</p>;
  }
  
// if (session && session.user && session.user.role === "admin") {
//     router.push("/admin"); // Redirect to admin page if user is admin
//   } else if (session && session.user) {
//     router.push("/basket"); // Redirect to user page if user is not admin
//   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await signIn("credentials", {
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/basket");
    }
  };
  
    return (
      <div className="flex flex-col items-center gap-20 pt-20">
        {/* <h1 className="text-gray-400">Welcome Back</h1>
  <h2 className="text-lg mb-30 text-gray-400">Please sign in to see the dashboard.</h2> */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-20 w-72">
          <input
            type="text"
            placeholder="Email"
            required
            className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
          />
          <button className="w-full p-5 cursor-pointer bg-green-500 rounded-lg text-white font-bold">
            Login
          </button>
          <button
            onClick={() => {
              signIn("github");
            }}
            className="w-full p-5 cursor-pointer bg-[#24292e] rounded-lg text-white font-bold"
          >
            Login with Github
          </button>
          {error && error}
        </form>
  
        <span className="text-gray-400">- OR -</span>
        <Link className="underline text-gray-600 hover:text-gray-400" href="/basket/register">
          Create new account
        </Link>
  
      </div>

    );
  
  

};
export default Login



// const Login = () => {
//    const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const { data: session, status } = useSession();
//   console.log('session basket', session)
// console.log('status basket', status)
//   const router = useRouter();
//   const params = useSearchParams();
 
//   useEffect(() => {
//     setError(params.get("error"));
//     setSuccess(params.get("success"));
//   }, [params]);
//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const token = data.token;
//         localStorage.setItem("authToken", token);
        
//         router.push("/basket");
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
//             placeholder="Email"
//             required
//             className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
//           />
//           <button className="w-full p-5 cursor-pointer bg-green-500 rounded-lg text-white font-bold">
//             Login
//           </button>
//           <button
//             onClick={() => {
//               signIn("github");
//             }}
//             className="w-full p-5 cursor-pointer bg-[#24292e] rounded-lg text-white font-bold"
//           >
//             Login with Github
//           </button>
//           {error && error}
//         </form>
  
//         <span className="text-gray-400">- OR -</span>
//         <Link className="underline text-gray-600 hover:text-gray-400" href="/basket/register">
//           Create new account
//         </Link>
  
//       </div>

//     );
  
//           }


// export default Login
