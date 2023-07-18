const fetchOrderId = async (id) => {
    const res = await fetch(`http://localhost:3000/api/oder/${id}`, {
        cache: "no-store",
    });
// console.log('resFech[ID]', res)
    if (!res.ok) {
        return {
            notFound: true,
        }
    }

    return res.json();
}
export default fetchOrderId;



// const fetchAllOrders = async () => {
//   const res = await fetch("http://localhost:3000/api/oder", {
//     headers: {
//       'Cache-Control': 'no-cache'
//     }
//   });

//   if (!res.ok) {
//     return {
//       notFound: true,
//     };
//     // throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

// export default fetchAllOrders;