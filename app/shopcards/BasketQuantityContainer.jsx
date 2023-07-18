// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { selectPiz } from "../redux/pizzas/pizzaSelector";

// import { useState, useEffect } from "react";
// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer,
// } from "@paypal/react-paypal-js";
// import { reset } from "../redux/pizzas/cardSlice";




// const BasketQuantityContainer = () => {
//       const [open, setOpen] = useState(false);
//   const [cash, setCash] = useState(false);
//     const router = useRouter();
//     const dispatch = useDispatch()
    
//   const pizzaSelect = useSelector(selectPiz);
//   console.log("pizza", pizzaSelect);

//   const amount = pizzaSelect.totalPizzas;
//   const currency = "USD";
//   const ButtonWrapper = ({ currency, showSpinner }) => {
//     const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
//     const createOrder = async (data) => {
//       try {
//         const res = await axios.post("http://localhost:3000/api/orders", data);
//         if (res.status === 201) {
//           dispatch(reset());
//           router.push(`/orders/${res.data._id}`);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     useEffect(() => {
//         dispatch({
//             type: "resetOptions",
//             value: {
//                 ...options,
//                 currency: currency,
//             },
//         });
//     }, [currency, showSpinner]);
//   };
//     return (
   
//     <div className="w-[300px] h-[200px] bg-yellow-300">
//       <h2>Total:{pizzaSelect.totalPizzas}</h2>
//       <p>Quantity pizzas:{pizzaSelect.quantity}</p>
//       {open ? (
//         <div className="mt-2.5 flex flex-col">
//           <button
//             className="p-2 cursor-pointer mb-1 bg-white text-teal-500 font-bold"
//             onClick={() => setCash(true)}
//           >
//             CASH ON DELIVERY
//           </button>
//           <PayPalScriptProvider
//             options={{
//               "client-id":
//                 "AeyAVCuLB5Ni6ucvUpEuf9rB0LlBnDl7DbCsMRg4lPU1dnNYbJGSssXpE4PoQelu-I9NVyTM5GD36mNI",
//               "disable-funding": "credit,card,p24",
//             }}
//           >
//             <PayPalButtons
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [
//                     {
//                       amount: {
//                         value: amount,
//                       },
//                     },
//                   ],
//                 });
//               }}
//               onApprove={(data, actions) => {
//                 return actions.order.capture().then((details) => {
//                   console.log(details);
//                   const shipping = details.purchase_units[0].shipping;
//                   createOrder({
//                 name: shipping.name.full_name,
//                 address: shipping.address.address_line_1,
//                 total: pizzaSelect.totalPizzas,
             
//               });
//                   // const name = details.payer.name.given_name;
//                   // alert(`Transaction completed by ${name}`);
//                 });
//               }}
//             />
//           </PayPalScriptProvider>
//         </div>
//       ) : (
//         <button
//           onClick={() => setOpen(true)}
//           className="h-8 text-red-700 font-bold cursor-pointer mt-5"
//         >
//           CHECKOUT NOW!
//         </button>
//       )}
//             </div>
           
//   );
// };
// export default BasketQuantityContainer;
