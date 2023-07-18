
const getAllOrders=async()=> {
  const res = await fetch("http://localhost:3000/api/oder", {
      next: {revalidate:10},
  });

    if (!res.ok) {
       return {
      notFound: true,
    }
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default getAllOrders