  
const createOrder = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/api/oder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
// console.log('resFetchOder',res)
      if (!res.ok) {
        throw new Error("Failed to create order");
      }

      const createdOrder = await res.json();
      // console.log("Order created successfully", createdOrder);
         if (!createdOrder || typeof createdOrder !== "object") {
      throw new Error("Invalid response data");
    }

     console.log("Order created successfully", createdOrder);
    return createdOrder;
     
   
    } catch (error) {
      console.log(error);
       throw new Error("Invalid response data");
    }
  };
export default createOrder

