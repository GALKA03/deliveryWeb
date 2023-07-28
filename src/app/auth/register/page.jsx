"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { signIn, useSession } from 'next-auth/react';


const Register = () => {
    const [error, setError] = useState(false)
  const router = useRouter()
  const { data: session } = useSession();
    
  const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        // Handle registration using the API route (POST request to /api/auth/register)
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if (res.status === 201) {
                // Handle successful registration (e.g., show a success message, redirect to a success page)
                console.log("Registration successful!");
                // For example, redirect to the login page after successful registration
                router.push("/basket");
                setError("Something went wrong");
                console.log(error);
            } else {
      // Handle other status codes (e.g., display an error message)
      setError("Something went wrong during registration.");
    }
  } catch (error) {
    setError("Something went wrong");
    console.log(error);
  }
        }
    


  const handleGoogleRegister = async () => {
    await signIn('google', { callbackUrl: '/basket' });
  };

  const handleGithubRegister = async () => {
    await signIn('github', { callbackUrl: '/basket' });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-transrparent rounded-lg shadow-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="write your name"
              required=""
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required=""
            />
          </div> 
          <button
            type="submit"
            className=" w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Register
          </button>
             <button
           onClick={handleGithubRegister}
            className="w-full p-5 cursor-pointer bg-[#24292e] rounded-lg text-white font-bold"
          >
            Register with Github
           </button>
           <button
            onClick={handleGoogleRegister}
            className="w-full p-5 cursor-pointer bg-[#24292e] rounded-lg text-white font-bold"
          >
            Register with GOOGLE
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {error && "something was wrong"}
            Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
          </p>
        </form>
     
      </div>
      </div>
      //  </div>
  );
};

export default Register;
