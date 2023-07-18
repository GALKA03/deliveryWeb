 'use client';
import { useState } from "react";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { selectPizzasQuantity } from "../redux/pizzas/pizzaSelector";
import { addPizza, setQuantity } from "../redux/pizzas/cardSlice";
// export const dynamic = 'auto';//force-dynamic,error,auto
const CardId = async ({ params }) => {
        const [quantity, setQuantity] = useState(1);
 
  const dispatch = useDispatch()
  // const quantitySelect = useSelector(selectPizzasQuantity)
 const { pizza } = params;
const {title,price, desc, img}=pizza
  // const [setPrice] = useState(price[0]);
   const handleClick = () => {
    dispatch(addPizza({ ...pizza, price, quantity}));
  //  dispatch(setQuantity({ id: pizzaId, quantity: newQuantity }));
  
   }
  
  // const handleClick = () => {
  //   dispatch(addPizza({ ...pizza, price, quantity}))
  // }

    return (
   <div>
      <div className="flex w-full items-center justify-center">
        <Image src={img} width={600} height={300} alt=" pizza" />

        <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center">
          <h2 className="underline text-2xl font-bold">{title}</h2>
          <p className="ordinal text-xl">Price: {price}€</p>
          <p>{desc}</p>
        </div>

        <div className="">
         {/* <label htmlFor="quantityInput">Quantity:</label> */}
             <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className=""
          /> 
          <button className="" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    )
}
export default CardId