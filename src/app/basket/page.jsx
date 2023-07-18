"use client";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { selectPiz } from "@/redux/pizzas/pizzaSelector";
import styles from "./page.module.css";
import Image from "next/image";
import OderDetails from "@/components/OderDetails/Oderdetails";
// import GooglePayButton from "@google-pay/button-react"
import React from "react"
// import { reset } from "@/redux/pizzas/cardSlice";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import createOrder from "../getLib/createOder";

 const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const fetcher = (url) => fetch(url).then((res) => res.json());

const Basket = () => {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const session = useSession();
  const router = useRouter();
  const pizzaSelect = useSelector(selectPiz);

  const { data, error, mutate, isLoading } = useSWR(
    session?.data?.user ? `/basket?username=${session.data.user.name}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (session.status === "loading" || isLoading) {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/basket/login");
  }

  
if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                {/* <th>Extras</th> */}
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </tbody>
            <tbody>
              {pizzaSelect.pizzas.map((pizza) => (
                <tr className={styles.tr} key={pizza._id}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image src={pizza.img} alt="" width={200} height={200} />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{pizza.title}</span>
                  </td>
                  {/* <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td> */}
                  <td>
                    <span className={styles.price}>${pizza.prices}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{pizza.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.total}>
                      ${pizza.prices * pizza.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>$
              {pizzaSelect.total}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>${pizzaSelect.total}
            </div>
            {open ? (
              <div className={styles.paymentMethods}>
                <button
                  className={styles.payButton}
                  onClick={() => setCash(true)}
                >
                  CASH ON DELIVERY
                </button>
           
              </div>
            ) : (
              <button onClick={() => setOpen(true)} className={styles.button}>
                CHECKOUT NOW!
              </button>
            )}
          </div>
        </div>
        {cash && <OderDetails total={pizzaSelect.total} /*createNewOder={createNewOder}*/ />}
      </div>
    )
  }
};

export default Basket;
