"use client"
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Nav from '@/components/navbar/Nav'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
//  import { store, persistor } from '../redux/store.jsx';
// // import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import Add from '@/components/Add/Add'
import CustomPersistGate from '@/redux/PersistGate'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const [close, setClose] = useState(true)
  
  
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <ThemeProvider>
          <AuthProvider>
            <CustomPersistGate>
        <div className='max-w-screen-xl min-h-screen my-0 mx-auto py-0'>
        <Nav />
        
        {children}
          <Footer />
                </div>
            {!close&&<Add/>}
              </CustomPersistGate>
            </AuthProvider>
          </ThemeProvider>
        
      </body>
    </html>
  )
}