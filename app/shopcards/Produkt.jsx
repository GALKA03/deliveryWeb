import Image from "next/image";
import { useSelector } from "react-redux";
import { selectPiz } from "../redux/pizzas/pizzaSelector";

const Product = () => {
   const pizzaSelect = useSelector(selectPiz)

   return (
    <>
      {pizzaSelect.pizzas.map(({_id, img, title, price }) => {
        return (
          <div key={_id} className="flex justify-center items-center">
            <Image
              className="mx:auto object-contain text-center"
              src={img}
              width={100}
              height={100}
              alt="pizza"
            />
            <div className="mt-4 px-6">
              <div className="flex items-center justify-between text-[26px]">
                <h3>Pizza name: {title}</h3>
                <h3>Price: {price}</h3>
              </div>
            </div>
            <ul>
              <li>    
                <button className="bg-green-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-green-800">
                  Edit
                </button>
              </li>
              <li>
                <button className="bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800">
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default Product;

