"use client";
import Link from "next/link";
import DarkMode from "../DarkMode.jsx/DarkMode";
import { signOut, useSession } from "next-auth/react";
import { useState,useEffect } from "react";
import { ShoppingBasket } from "../../../public/svgs/index";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectPizzasQuantity } from "@/redux/pizzas/pizzaSelector";
import Login from "@/app/admin/(auth)/login/page";
import  { User } from "next-auth";


const Nav = () => {
     const router = useRouter();
  const [isDarkMode, setDarkMode] = useState(false);
  const quantity = useSelector(selectPizzasQuantity);
  const { data: session, status } = useSession();
   const isHomePage = router.pathname === "/";
  const isBasketPage = router.pathname === "/basket";
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.push('/api/auth/signin?callbackUrl=/client');
  //   },
  // });


  const links = [
    { id: 1, title: "blogposts", url: "/blogposts" },
    { id: 2, title: "portfolio", url: "/portfolio" },
    
    //  {
    //   id: 5,
    //   title: "contact",
    //   url: "/contact",
    // },
  ];
//  const { data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       router.push('/api/auth/signin?callbackUrl=/client');
//     },
//   });

 
// useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists in localStorage
//   }, []);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const getLinkClassName = (url) => {
    let className = "mr-4";
    if (router.pathname === url) {
      className += " text-red-500 underline";
      if (isDarkMode) {
        className += " dark";
      }
    }
    return className;
  };

// const handleLoginClick = async () => {
//    router.push("/admin/login"); // Redirect to the login/admin page

// };
   const handleLoginClick = async () => {
    router.push("/admin/login"); // Redirect to the login/admin page
  };

 const handleLogout = () => {
 signOut(); 
    
    router.replace("/");
  };
 const userRole = session?.user?.role;
  const isLoggedIn = session?.status === "authenticated";
  return (
    <div className="p-10 flex justify-between items-center">
      {!isHomePage && (
        <Link href="/" className="text-2xl font-bold">
          HOME
        </Link>
      )}

      {userRole === "admin" && isLoggedIn && (
        <>
          <Link href="/admin" className="text-2xl font-bold">
            admin
          </Link>
          <button className="absolute top-0 right-0" onClick={handleLogout}>
            Logout Admin
          </button>
        </>
      )}

      <DarkMode toggleDarkMode={toggleDarkMode} />

      <div className="flex justify-items-end justify-self-center text-2xl font-bold">
        {links.map(({ id, title, url }) => (
          <Link key={id} href={url} className={getLinkClassName(url)}>
            {title}
          </Link>
        ))}
      </div>

      <div className="relative cursor-pointer">
        {isLoggedIn && userRole === "user" && (
          <div>
            <p>{userRole}</p>
            <button className="" onClick={handleLogout}>
              Logout User
            </button>
          </div>
        )}

        <Link href="/basket" passHref>
          <div className=" bg-transparent rounded-full p-4 w-30 h-30">
            <ShoppingBasket />
          </div>
          <span className="absolute top-3 right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
            {quantity}
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
