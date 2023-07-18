import getPizzas from "../getLib/getAllPizzas";
import Link from "next/link";
import Image from "next/image";


const Pizzas = async() => {
const pizzas= await getPizzas()
// console.log('pizzas', pizzas)
    return (
   <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="grid grid-cols-3 gap-4 text-center">
        {pizzas.map(({ img, desc, _id, prices, title }) => (
          <Link key={_id} href={`/pizzas/${_id}`} as={`/pizzas/${_id}`} className="border-2 border-yellow-700">

              <div className="p-4">
                <Image
                  src={img}
                  width={400}
                  height={300}
                  alt={title}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="underline text-xl font-semibold">{title}</h2>
                <p className="ordinal text-lg">Price: {prices}€</p>
                <p>{desc}</p>
              </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Pizzas