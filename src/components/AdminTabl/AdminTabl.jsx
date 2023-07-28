"use client";
import styles from "./AdminTabl.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import getAllOrders from "../../app/getLib/getAllOrders";
import getPizzas from "../../app/getLib/getAllPizzas";
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation";
import React from 'react';

const AdminTabl = () => {
      const [pizzaList, setPizzaList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const status = ["preparing", "on the way", "delivered"];
 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await getAllOrders();
        const pizzas = await getPizzas();
        setOrderList(orders);
        setPizzaList(pizzas);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/pizzas/${id}`, {
        method: "DELETE",
      });

      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const response = await fetch(`http://localhost:3000/api/order/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: currentStatus + 1,
        }),
      });

      if (response.ok) {
        const updatedOrder = { ...item, status: currentStatus + 1 };
        setOrderList([
          updatedOrder,
          ...orderList.filter((order) => order._id !== id),
        ]);
      } else {
        console.log("Status update failed");
      }
    } catch (err) {
      console.log(err);
    }
  };
    return (
          <div className={styles.container}>
          {/* <button onClick={handleLogout}>Logout</button> */}
          <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.trTitle}>
                  <th>Image</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </tbody>
              {pizzaList.map((product) => (
                <tbody key={product._id}>
                  <tr className={styles.trTitle}>
                    <td>
                      <Image
                        src={product.img}
                        width={50}
                        height={50}
                        alt=""
                      />
                    </td>
                    <td>{product._id.slice(0, 5)}...</td>
                    <td>{product.title}</td>
                    <td>${product.prices[0]}</td>
                    <td>
                      <button className={styles.button}>Edit</button>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.trTitle}>
                  <th>Id</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </tbody>
              {orderList.map((order) => (
                <tbody key={order._id}>
                  <tr className={styles.trTitle}>
                    <td>{order._id.slice(0, 5)}...</td>
                    <td>{order.customer}</td>
                    <td>${order.total}</td>
                    <td>{order.method === 0 ? <span>cash</span> : <span>paid</span>}</td>
                    <td>{status[order.status]}</td>
                    <td>
                      <button
                        onClick={() => handleStatus(order._id)}
                        className="min-w-full h-fit bg-orange-900 text-orange-300"
                      >
                        Next Stage
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
    )
}
export default AdminTabl