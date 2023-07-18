"use client"
import fetchAllOders from "@/app/getLib/fetchOderId";
import { useState } from "react";
// import fetchOderId from "@/app/getLib/fetchOderId";
// import fetchAllOrders from "@/app/getLib/fetchAllOders";
import createOrder from "@/app/getLib/createOder";
import { useRouter } from "next/navigation";

const OrderDetails =  ({ total, createNewOder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState("");
 
const router = useRouter();

  const handleClick = async () => {
    const orderData = {
      customer,
      address,
      email,
      phone: number,
      total,
      details,
      method: 0,
    };
    try {
      const createdOrder = await createOrder(orderData);
      console.log("Order created successfully", createdOrder);
      router.push(`oder/${createdOrder._id}`);
    } catch (error) {
      console.log("Failed to create order", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formIsValid = true;

    switch (name) {
      case "name":
        if (value === "") {
          console.log("Name is required");
          formIsValid = false;
        }
        break;
      case "email":
        if (value === "") {
          console.log("Email is required");
          formIsValid = false;
        }
        break;
      case "address":
        if (value === "") {
          console.log("Address is required");
          formIsValid = false;
        }
        break;
      case "number":
        if (value === "") {
          console.log("Number is required");
          formIsValid = false;
        }
        break;
      case "details":
        if (value === "") {
          console.log("Write some details");
          formIsValid = false;
        }
        break;
      default:
        console.log("Form submitted successfully");
        handleClick(); // Call handleClick function here if the form is valid
        break;
    }

    // Perform additional form validation or submission logic if needed
  };

  return (
    <div className="w-full h-screen absolute top-0 left-0 flex z-50 items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="w-500 bg-white rounded-2xl p-10 flex flex-col items-center justify-center">
        <h1>You will pay {total}$</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="..."
              placeholder="write your name"
              required
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="..."
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Write your number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="+380000000000"
              className="..."
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Write your address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="city Dnipro, via Favolle 5/6"
              className="..."
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="details"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Write your message
            </label>
            <textarea
              type="text"
              name="details"
              id="details"
              placeholder=" write you massage"
              className="w-full"
              rows="3"
              cols="5"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <button onClick={handleClick} className="w-full h-[40px] bg-red-300 ">
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;
