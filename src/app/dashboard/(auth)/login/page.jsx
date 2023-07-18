"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Login = () => {
 const { data: session } = useSession();
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

  if (session && session.status === "authenticated") {
    router?.push("/dashboard");
  }


// 
const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
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
    {error && error}
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
  <Link className="underline text-gray-600 hover:text-gray-400" href="/dashboard/register">
    Create new account
  </Link>
  {/* <button
    onClick={() => {
      signIn("github");
    }}
    className="w-full p-5 cursor-pointer bg-[#24292e] rounded-lg text-white font-bold"
  >
    Login with Github
  </button> */}
</div>

  );

};
export default Login