
// const PizzaPage = async () => { 
//   const { results:pizzas }= await getPizzas()
//   return (
//     <AllPizzas pizzas={pizzas}/>
//   )
// }
// export default PizzaPage


import PizzasCard from "../components/PizzasCard";
import getPizzasId from "../getLib/getPizzas";



// export async function generateStaticParams() {
//   const pizzas = await fetch('http://localhost:3000/api/pizzas/').then((res) => res.json());
//   const paths = pizzas.map((pizza) => {
//     const { slug } = pizza;
//     return { params: { slug } };
//   });
//   return { paths, fallback: false }
// export const dynamic = 'auto';
const PizzasList = async() => {
       let pizzas = await getPizzasId()

    console.log('pizzas page', pizzas)
//  console.log(pizzas)
    return (
    <ul>
      {pizzas.map((pizza) => (
        <PizzasCard key={pizza._id} pizza={pizza} />
      ))}
    </ul>
  );
};
export default PizzasList;


//  export const getPizzas = async ()=> {
//     try {
//         let res= await fetch("http://localhost:3000/api/pizzas")
//     return res.json()
//     } catch (error) { console.log(error)}
// }
// const PizzasList = ({ pizzas }) => {
//   return (
//     <ul>
//       {pizzas.map((pizza) => (
//         <PizzasCard key={pizza._id} pizza={pizza} />
//       ))}
//     </ul>
//   );
// };

// export async function generateStaticParams() {
//   const res = await fetch('http://localhost:3000/api/pizzas');
//   const pizzas = await res.json();

//   return pizzas.map((pizza) => ({
//     params: {
//       id: pizza.slug,
//     },
//   }));
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3000/api/pizzas/${params.id}`);
//   const pizza = await res.json();

//   return {
//     props: {
//       pizzas: JSON.parse(JSON.stringify(pizza)),
//     },
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/pizzas');
//   const pizzas = await res.json();

//   const paths = pizzas.map((pizza) => ({
//     params: { id: pizza.slug.toString() },
//   }));
// console.log('path',paths)
//   return { paths, fallback: false };
// }

// export default PizzasList;





