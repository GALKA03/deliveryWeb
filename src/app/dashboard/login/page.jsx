"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { handleLogin } from "@/app/getLib/getLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
if (res.status === 201) {
  localStorage.setItem("token",data.token);
  setIsLoggedIn(true);
  console.log('data', data)
  router.replace("/admin");

} else {
  setError(data.message);
}   
    } catch (err) {
      setError("An error occurred");
    }
  };

  return ( 
    <div className="w-full h-screen absolute top-0 left-0 flex z-50 items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="w-500 bg-white rounded-2xl p-10 flex flex-col items-center justify-center">
        <form  onSubmit={handleLogin} className="flex flex-col gap-20 w-72">
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
          <Link href="/" className="text-center">go Home</Link>
        </form>
 {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        
      </div>
    </div>
  )
};
export default Login;
