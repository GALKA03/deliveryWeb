//  async function generateStaticParams() {
//   // Fetch pizzas from your API or elsewhere
//   const pizzas = await fetch(`http://localhost:3000/api/pizzas/${id}`).then((res) => res.json());

//   // Map over the pizzas to extract each slug
//   const paths = pizzas.map((pizza) => {
//     const { slug } = pizza; // Extract the slug from the pizza object
//     return { params: { slug } };
//   });

//   // Return the array of paths for use in getStaticPaths
//   return paths;
// }
// export default generateStaticParams

 const getPizzas = async ()=> {
    try {
        let res= await fetch(`http://localhost:3000/api/pizzas/`,{ cache: 'force-cache' })
        if (!res.ok) {
        throw new Error('failed to fetch data')
    }
      return res.json()
    } catch (error) { console.log(error)}
}
export default getPizzas

