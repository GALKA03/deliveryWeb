
const getPizzaId = async ( id ) => {
  const res = await fetch(`http://localhost:3000/api/pizzas/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      notFound: true,
    }
  }

  return res.json();
}
export default getPizzaId