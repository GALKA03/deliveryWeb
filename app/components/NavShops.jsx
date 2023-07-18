import Link from "next/link"
import Image from "next/image"
export const Shops = () => {
    return (
        <>
        <nav>
        <ul className=""> 
                    <li className="mb-5">
                        <h2>Bella Pizzas</h2>
                        <Link href="/pizzas"><Image src="/img/piszzShop.jpg" width={400} height={100} alt='pizzas' /></Link></li>
                    <li className="mb-5">
                        <h2>MIO SUSHI</h2>
                        <Link href="/sushi"><Image src="/img/sushiShop.jpg" width={400} height={100} alt='sushi' /></Link></li>
                    <li className="">
                         <h2>The BEST WINO</h2>
                        <Link href="/wine"><Image src="/img/wineShop.jpg" width={400} height={100} alt='wine' /></Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Shops