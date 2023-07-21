"use client";
import Button from "../../../components/elements/Button";
import TextBox from "../../../components/elements/TextBox";
import { signIn } from "next-auth/react";
import { useRef } from "react";

const LoginPage = ({ searchParams }) => {
  const emailUser = useRef('');
  const pass = useRef('');

  const onSubmit = async () => {
    try {
      const result = await signIn('credentials', {
        email: emailUser.current,
        password: pass.current,
        redirect: true,
        callbackUrl: '/',
      });
      // Handle success, if needed
      console.log('Sign-in successful:', result);
    } catch (error) {
      // Handle sign-in error, display message to the user, etc.
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <div className={'flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600'}>
      {searchParams?.message && (
        <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>
      )}
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox labelText="User Name" onChange={(e) => (userName.current = e.target.value)} />
        <TextBox labelText="Password" type="password" onChange={(e) => (pass.current = e.target.value)} />
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
