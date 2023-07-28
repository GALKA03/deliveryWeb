"use client";
import Link from "next/link";
import DarkMode from "../DarkMode.jsx/DarkMode";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { ShoppingBasket } from "../../../public/svgs/index";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectPizzasQuantity } from "@/redux/pizzas/pizzaSelector";

const Nav = () => {
  const router = useRouter();
  const [isDarkMode, setDarkMode] = useState(false);
  const quantity = useSelector(selectPizzasQuantity);
  const { data: session, status } = useSession();
console.log('sessionNav', status, session)
  const isHomePage = router.pathname === "/";
  // const isBasketPage = router.pathname === "/basket";
  // const isAdminPage = router.pathname ==="/admin"
    
  
 const handleLogout = async () => {
    try {
      await signOut();
      // After signing out, redirect the user to the home page
      router.replace("/");
    } catch (error) {
      // Handle logout error
      console.log("Logout error:", error);
    }
  };
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.push('/api/auth/signin?callbackUrl=/client');
  //   },
  // });

    //  {
    //   id: 5,
    //   title: "contact",
    //   url: "/contact",
    // },

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
  // const handleLoginClick = async () => {
  //   router.push("/admin/login"); // Redirect to the login/admin page
  // };
// const handleAdminLogout = () => {
//   // Implement the logout logic for admins here
//   // For example, you can use the same signOut() function from next-auth/react
//   signOut();

//   // After signing out, redirect the admin to the admin login page
//   router.replace("/admin/login");
// };

  const userRole = session?.user?.role;
  console.log('userRole Nav', userRole);
   const isLoggedIn = session?.status === "authenticated";
  return  (
    <div className="p-10 flex flex-col  items-center">
       <ul className=" flex items-center justify-between w-full">
        <li>
      <div className="top-10 left-8">
        <DarkMode toggleDarkMode={toggleDarkMode} className="" />
          </div>
        </li>
        <li>
      {session ? (
       
          <ul className=" top-5 right-8 flex w-full">
          <li className="mr-2">
            {/* <p>Hello, {session.user.email}</p> */}
            {userRole && <p>Role: {userRole}</p>}
          </li>
          <li>
                <button onClick={handleLogout} className="relative inline-flex items-center justify-center p-0.5 bg-transparent mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 hover:text-orange-950 rounded-lg group hover:bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                 
                  Logout User
                </button>

              </li>
        </ul>
        ) : <p>Hello</p>}
             </li>
      </ul >
      <ul className="flex items-center justify-around w-full">
        {!isHomePage && (
          <li>
            <Link href="/" className="text-2xl font-bold">
              HOME
            </Link>
          </li>
        )}
<li>
            <Link href="/admin" className="text-2xl font-bold">
              Admin
            </Link></li>
      {userRole === "admin" && isLoggedIn && (
    <li>
      <button className="absolute top-0 right-0" onClick={ handleLogout}>
        Logout Admin
      </button>
    </li>
  )}

       <li>
          <Link href="/blogposts" className="text-2xl font-bold">
            Blog posts
          </Link>
        </li>
          <li className="relative cursor-pointer">
          <Link href="/basket" passHref>
            <div className=" bg-transparent rounded-full p-4 w-30 h-30">
              <ShoppingBasket />
            </div>
            <span className="absolute top-3 right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
              {quantity}
            </span>
          </Link>
        </li>
      </ul>
    
    </div>
   
  );
};
export default Nav;
