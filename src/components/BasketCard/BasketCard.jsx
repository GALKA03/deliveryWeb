"use client"
import { useDispatch, useSelector } from "react-redux";
import OderDetails from "@/components/OderDetails/Oderdetails";
import styles from "./BasketPage.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DeleteBtn, UpdateBtn } from "../../../public/svgs";
import {deletePizza, updatePizza} from "../../redux/pizzas/cardSlice"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { selectPiz } from "@/redux/pizzas/pizzaSelector";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const fetcher = (url) => fetch(url).then((res) => res.json());

const BasketCard = ({ user }) => {
    const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const dispatch = useDispatch()
  const pizzaSelect = useSelector(selectPiz);

//  const greeting = user?.name ? (
//         <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
//             Hello {user?.name}!
//         </div>
//     ) : null



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
                  <td>
                    
                  <button onClick={() => dispatch(deletePizza(pizza))}><DeleteBtn className="hover:text-red-500"/></button>
          <button onClick={() => dispatch(updatePizza({ id: pizza._id, quantity: updatedQuantity }))}><UpdateBtn className="hover:fill-lime-800"/></button>
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
export default BasketCard