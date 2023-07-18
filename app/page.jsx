import Image from 'next/image' 
import NavShops from './components/NavShops'
export default function Home() {
  //  const router = useRouter();

  //  const  _id  = router.asPath==='/\/pizzas\/(.+)/'?.[1] || null;

  //  const _id = router.asPath.match(/\/pizzas\/(.+)/)?.[1] || null;
  // const isPizzaDetailPage = router.asPath === `/pizzas/${_id}` && router.asPath !== '/pizzas';
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
<aside className='block p-3'><NavShops /></aside>
    </main>
  )
}
