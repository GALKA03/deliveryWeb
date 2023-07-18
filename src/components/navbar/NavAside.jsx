import Link from "next/link";
import Image from "next/image";
import s from "./navAside.module.css"
export const NavAside = () => {
  return (
    <>
      <nav>
        <ul className="">
          <li className="relative mb-5 sm:block md:flex justify-between items-center " layout="responsive">
                      <Link href="/pizzas" className="">
                          <div className={s.navImage}>
              <Image
                              src="/img/piszzShop.jpg"
                            
                width={400}
                height={100}
                alt="pizzas"
              /></div>
            </Link>
            <h2 className="absolute top-1 left-1 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r to-orange-950 from-red-400">Bella Pizzas</h2>
          </li>
          <li className="relative mb-5 sm:block md:flex justify-between items-center " layout="responsive">
                      <Link href="/sushi">
                          <div className={s.navImage}>
                          <Image
                             
                src="/img/sushiShop.jpg"
                width={400}
                height={100}
                              alt="sushi"
                              className={s.navImage}
                              
                          />
                          </div>
            </Link>
            <h2 className=" absolute top-1 left-1 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r to-orange-950 from-red-400">MIO SUSHI</h2>
          </li>
          <li className="relative sm:block md:flex justify-between items-center" layout="responsive">
                      <Link href="/wine">
                          <div className={s.navImage}>
                          <Image
                              className={s.navImage}
                src="/img/wineShop.jpg"
                width={400}
                height={100}
                              alt="wine"
                              
                              />
                              </div>
            </Link>
            <h2 className="absolute top-1 left-1 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r to-orange-950 from-red-400">WineWorld</h2>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavAside;
