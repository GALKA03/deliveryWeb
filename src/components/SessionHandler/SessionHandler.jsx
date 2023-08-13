"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import AddButton from '../AddButton/AddButton';
import Add from '../Add/Add';


const SessionHandler=({ children })=> {
  const [close, setClose] = useState(true);
  const { data: session, status } = useSession();
  const isAdmin = status === 'authenticated' && session?.user?.role === 'admin';

  return (
    <>
      {isAdmin && <AddButton setClose={setClose} className="absolute min-w-min" />}
      {!close && <Add setClose={setClose} />}
      {/* {children({ isAdmin, session, status })} */}
    </>
  );
}
export default SessionHandler