import Pizzas from "@/models/Pizzaz";

export async function GET(request) {
  await dbConnect();

  try {
   const { id } = request.query;
    const pizza = await Pizzas.findOne({ _id: new Object(id) });
      if(!pizza) await init()
    console.log(pizza)
    if (pizza) throw new error
    return {pizza}
    }catch (error) {
    return {error:"failed fetch pizza get"}
  }
}
