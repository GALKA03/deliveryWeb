export default async function getOderId(id) {
  const res = await fetch(`http://localhost:3000/api/oders/${id}`);
 if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data Oder Id');
  }
    return res.json();
}
// const createOrder = async (data) => {
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
