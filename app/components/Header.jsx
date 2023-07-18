import { ShoppingBasket } from "@/public/svgs"
import Link from "next/link"
import { selectPizzasQuantity } from "../redux/pizzas/pizzaSelector"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {
    const dispatch = useDispatch()
    const quantity= useSelector(selectPizzasQuantity)

    return (
        <div className="bg-yellow-100 p-5 flex justify-between flex-wrap">
            <h1>EXPRESS DELIVERY</h1>
           <div className="relative cursor-pointer">
           <Link href="/shopcards">
                
                    <div className="bg-transparent rounded-full p-4 w-30 h-30">
                        <ShoppingBasket />
                </div>
                <span className="absolute  top-3 right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">{quantity}</span>
               
            </Link>
        </div>
        </div>
    )
}
export default Header