"use client";
import Link from "next/link";
import getPizzaId from "@/app/getLib/getPizzaId";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { addPizza } from "@/redux/pizzas/cardSlice";
export async function generateMetadata({ params }) {
  const pizza = await getPizzaId(params.id);
  return {
    title: pizza.title,
    description: pizza.desc,
  };
}
const PizzasId = async ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(params.prices);
  const dispatch = useDispatch();
  const quantityRef = useRef(1);
  const pizza = await getPizzaId(params.id);
  //  console.log("pizza", pizza);
  // console.log("params", params);
  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleClick = () => {
  const selectedQuantity = parseInt(quantityRef.current.value, 10);
  dispatch(addPizza({ ...pizza, price, quantity: selectedQuantity }));
  quantityRef.current.value = 1; // Reset the quantity input after adding to cart
};

  return (
    <div className="flex w-100 items-center justify-around py-10">
      <Image src={pizza.img} alt="Picture" width={400} height={400} />

      <div className="flex flex-col max-w-fit">
        <h2 className="underline text-xl font-semibold text-left mb-4">
          {pizza.title}
        </h2>
        <p className="ordinal text-lg mb-4">Price: {pizza.prices}€</p>
        <p className="mb-4">{pizza.desc}</p>
        <div className="flex flex-col mb-4">
          <input
            type="number"
            // value={quantity}
            defaultValue={1}
            className="mb-4 bg-transparent text-black font-bold text-2xl"
            // onChange={(e) => setQuantity(e.target.value)}
          ref={quantityRef}
          />
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default PizzasId;
