"use client"
import useSWR from 'swr'
import { useEffect, useState } from "react";
import getPizzas from "../getLib/getAllPizzas";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Image from "next/image";


const Dashboard = () => {
const session = useSession();
const router = useRouter();

   console.log('session', session)
// const fetcher = (...args) => fetch(...args).then(res => res.json())
//  const { data, error, isLoading } = useSWR('http://localhost:3000/api/pizzas', fetcher)
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/admin?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>Dashboard</div>
  );
};
export default Dashboard