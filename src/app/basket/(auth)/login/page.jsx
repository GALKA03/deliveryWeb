"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";



const Login = () => {
  //  const session = useSession();
    const { data: session, status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

 if (session && session.status === "loading") {
  return <p>Loading...</p>;
}
 useEffect(() => {
    if (status === "authenticated") {
      router.replace("/basket"); // Use `replace` instead of `push` to prevent concurrent rendering issues
    }
  }, [status, router]);


//   if (session && session.status === "authenticated") {
//     router?.push("/admin");
//   }
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     signIn("credentials", {
//       email,
//       password,
//     });
//   };
const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirect
    }).then((response) => {
      if (response.error) {
        setError(response.error);
      }
    });
  };

  return (
    <div className="w-full h-screen absolute top-0 left-0 flex z-50 items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="w-500 bg-white rounded-2xl p-10 flex flex-col items-center justify-center">
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
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </form>
        <button
          onClick={() => {
            signIn("google");
          }}
          className="w-full p-5 cursor-pointer bg-[#E46132] rounded-lg text-white font-bold hover:bg-[#E46132]"
        >
          Login with Google
        </button>
        <span className="text-gray-400">- OR -</span>
        <Link href="/basket/register" className="underline text-gray-600 hover:text-gray-400">
        Create new account
        </Link>
      </div>
    </div>
  );
};

export default Login;