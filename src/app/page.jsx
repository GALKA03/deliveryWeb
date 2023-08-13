



import NavAside from '@/components/navbar/NavAside'


import AddButton from '@/components/AddButton/AddButton';
import Add from '@/components/Add/Add';
import SessionHandler from '@/components/SessionHandler/SessionHandler';


export default function Home() {
// const [close, setClose]= useState(true)
  // const [isAdmin, setIsAdmin] = useState(false); // Set the isAdmin flag based on the user's admin status

  // const { data: session, status } = useSession(); 
 
  // useEffect(() => {
  //   if (status === 'authenticated' && session?.user?.role === 'admin') {
  //     setIsAdmin(true); // Set isAdmin to true if the user is authenticated and has an admin role
  //   }
  // }, [status, session]);



  return (
    <main >
  <div className="flex relative min-h-screen  items-center justify-between ">
        <NavAside className="w-2/4" />
        <SessionHandler />
        {/* <div className="  w-2/4 hidden sm:block ">
          

        </div> */}
        </div>
    </main>
  )
}
 /* <div className={s.imgContainer}>
      <Image src={deliveryMan} alt="deliveryMan"className={s.img} /*layout="responsive"*/ /*width={500} height={400}/>*/
        // </div> */}