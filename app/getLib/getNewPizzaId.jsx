export default async function getNewPizzaId(id) {
  const res = await fetch(`http://localhost:3000/api/pizzas/${id}`);
 if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data Id');
  }
    return res.json();
}