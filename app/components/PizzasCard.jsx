
import Image from "next/image"
import Link from "next/link"
import NavShops from "../components/NavShops"

const PizzasCard = ({ pizza }) => {

 
  const { _id, title, price, desc, img } = pizza

//  const isPizzaDetailPage = router.asPath === `/pizzas/${_id}` && router.asPath !== '/pizzas';
  //  const isPizzaDetailPage = router.asPath === `/pizzas/${_id}` && router.asPath !== '/pizzas'; 
  return (
        
       <li className="mb-10">
       <div className="flex w-9/12 flex-col items-center justify-center ">
        
            <Link href={`/pizzas/${_id}`} as={`/pizzas/${_id}`}>
              <Image src={img} width={400} height={300} alt="peperoni pizza" />
          
            </Link>
          
          <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center" >
                  <h2 className=" underline text-xl font-semibold">{title}</h2>
                    <p className="ordinal text-lg ">Price:{price}€</p>
                    <p>{desc}</p>
       </div>
        </div>
      </li>

    )
}
export default PizzasCard
      {/* <li className="mb-10">
       <div className="flex w-9/12 flex-col items-center justify-center ">
          <Image src="/img/pizzas/peperoni.jpg" width={300} height={300} alt="peperoni pizza"/>
          <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center" >
                  <h2 className=" underline text-xl font-semibold">Peperoni pizza</h2>
          <p className="ordinal text-lg ">Price:8</p>
          <p>pomodoro, mozzarella, salame piccante, uovo, zucchine e grana</p>
       </div>
        </div>
      </li>
      <li >
   <div className="flex w-9/12 flex-col items-center justify-center ">
          <Image src="/img/pizzas/salyami.jpg" width={200} height={200} alt="Salsichia pizza"/>
          <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center" >
                  <h2 className=" underline text-xl font-semibold">Salsichia</h2>
          <p className="ordinal text-lg ">Price:9</p>
          <p>tomato, mozzarella, anchovies and oregano</p>
         </div>
        </div>
      </li> */}