import getNewPizzaId from "../../getLib/getNewPizzaId"
import getPizzas from "@/app/getLib/getPizzas";

import { Suspense } from 'react';

   import CardId from '@/app/components/CardId';
import React from 'react';
// import Form  from "../../components/Form"
export async function generateStaticParams() {
  const pizzas = await getPizzas()
  return pizzas.map((pizza) => ({
   id: pizza._id
  }));
}


const PizzaId = async ({params}) => {
    const { pizza } = await getNewPizzaId(params.id)
    // const { pizza } = await getNewPizzaId(pizzaId);
    // console.log('pizza[id]', pizza)
    if (!pizza) {
        notFound()
    }


    return (
  <>
       {/* <button onClick={() => router.back()}>Go Back</button>  */}
       {/* <Form /> */}
      <Suspense fallback={<div>Loading...</div>}>
     
                <CardId params={{ pizza }}/>
        </Suspense>
</>
  );
};

export default PizzaId;


  
    // <div className="flex w-full items-center justify-center ">
     
    //   <Image src={pizza.img} width={600} height={300} alt="pepperoni pizza" />

    //   <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center">
    //     <h2 className="underline text-2xl font-bold">{pizza.title}</h2>
    //     <p className="ordinal text-xl ">Price: {pizza.price}€</p>
    //     <p>{pizza.desc}</p>
    //   </div>
    // </div>
// export async function generateStaticParams() {
//   const pizzas = await getPizzas()
//   return pizzas.results.map((pizza) => ({
//     slug: pizza.slug
//   }));
// }
// export async function generateStaticParams() {
//   const pokes = await getPokemons();
//   return pokes.results.map((p) => ({ name: p.name }));
// }
// export async function generateStaticParams() {
//   const pizzas = await fetch('http://localhost:3000/api/pizzas/').then((res) => res.json());
 
//   return pizzas.map((pizza) => ({
//     slug: pizza.slug,
//   }));
// }
//  
// export const getServerSideProps = async ({ params }) => {
//   const res = await axios.get(
//     `http://localhost:3000/api/pizzas/${params.id}`
//   );
//   return {
//     props: {
//       pizza: res.data,
//     },
//   };
// };

// export default Pizza;


// export const getServerSideProps = async ({params}) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/products/&{params}`);
//     const pizzas = await res.json();
//     console.error('pizzas', pizzas);
//     return {
//       props: {
//         pizzas,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         pizzas: [], // Return an empty array or handle the error case accordingly
//       },
//     };
//   }
// };