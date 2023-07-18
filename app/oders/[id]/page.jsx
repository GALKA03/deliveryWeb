import getOderId from "@/app/getLib/getOderId";

export async function generateStaticParams() {
  const oders = await getOderId()
  return oders.map((oder) => ({
   id: oder._id
  }));
}


const OderId = async ({params}) => {
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

export default OderId;