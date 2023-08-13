"use client"
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
//import { toast } from "react-toastify";
import { useRouter,useSearchParams } from "next/navigation";
import { parseCallbackUrl } from "@/helpers/helpers";
import { Formik, Form, Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';


const Login = () => {

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl");
  
const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(5, "Password must be at least 5 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])/,
        "Password must contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });


const handleLogin = async (values) => {
  const { email, password } = values;
  const data = await signIn("credentials", {
    email,
    password,
    callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : "/",
  });

  if (data?.error) {
    setError(data.error);
    // console.log("Login failed:", data.error);
  } else if (data?.status === "authenticated") {
    setSuccess("Login successful!");
    // console.log("Login successful!");
    router.push("/");
  }
};
   return ( 
    <div className="w-full h-screen absolute top-0 left-0 flex z-50 items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="w-500  bg-white rounded-2xl p-10 flex flex-col items-center justify-center">
       <Formik
  initialValues={{ email: "", password: "" }}
  validationSchema={SignupSchema}
  onSubmit={handleLogin}
>
         <Form className="flex flex-col gap-2 w-72">
          <div>
              
             <Field
            type="email"
            
                 id="email"
                 name="email"
                 placeholder="name@company.com"
            required
            className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
            // onChange={(e) => setEmail(e.target.value)}
               />
               <ErrorMessage name="email" component="div" className="text-red-500"/>
             </div>
                 <div>
          
          <Field
            type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
            required
            className="p-5 border-2 border-gray-300 rounded-lg outline-none text-gray-400 text-lg font-bold"
            // onChange={(e) => setPassword(e.target.value)}
               />
                <ErrorMessage name="password" component="div" className="text-red-500" />
             </div>
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
           <Link className="underline text-center text-gray-600 hover:text-gray-400" href="/">
          Go Home
           </Link>
           </Form>
           </Formik>
       </div>
       
    </div>
  )
};

export default Login;

//  const handleLogin = async (e) => {
   

  //   const data = await signIn("credentials", {
  //     email,
  //     password,
  //      callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : "/",
       
  //     //callbackUrl: false,
  //   });
  //     console.log("data===>", data)
  //   if (data?.error) {
  //     error(data?.error);
  //     alert("Registration failed. Try again.");
  //   }

  //   if (data?.ok) {
  //     alert("Registration successful");
  //     router.push("/");
      
  //   }
  // };