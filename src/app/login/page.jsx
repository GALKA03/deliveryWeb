"use client"
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
//import { toast } from "react-toastify";
import { useRouter,useSearchParams } from "next/navigation";
import { parseCallbackUrl } from "@/helpers/helpers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl");
  
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = await signIn("credentials", {
      email,
      password,
       callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : "/",
       
      //callbackUrl: false,
    });
      console.log("data===>", data)
    if (data?.error) {
      error(data?.error);
      alert("Registration failed. Try again.");
    }

    if (data?.ok) {
      alert("Registration successful");
      router.push("/");
      
    }
  };

   return ( 
    <div className="w-full h-screen absolute top-0 left-0 flex z-50 items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="w-500 bg-white rounded-2xl p-10 flex flex-col items-center justify-center">
        <form  onSubmit={handleLogin} className="flex flex-col gap-5 w-72">
          <input
            type="text"
            placeholder="username"
            required
            className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            /*onClick={handleClick}*/
            type="submit"
            className="w-full p-5 cursor-pointer bg-green-500 rounded-lg text-white font-bold"
          >
            Sign In
          </button>
 {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
         <button
            onClick={() => {
              signIn("github");
            }}
            className="w-full p-5 cursor-pointer bg-[#24292e] rounded-lg text-white font-bold"
          >
            Login with Github
           </button>
           <button
            onClick={() => {
              signIn("google");
            }}
            className="w-full p-5 cursor-pointer bg-[#24292e] rounded-lg text-white font-bold"
          >
            Login with GOOGLE
          </button>
          {error && error}
        
  
        <span className="text-gray-400 text-center">- OR -</span>
        <Link className="underline text-center text-gray-600 hover:text-gray-400" href="/auth/register">
          Create new account
           </Link>
         </form>
       </div>
       
    </div>
  )
};

export default Login;