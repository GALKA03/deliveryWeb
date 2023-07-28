"use client"
import { AuthProvider } from "@/context/AuthContext"
import { SessionProvider } from "next-auth/react"

const GlobalProvider = ({ children }) => {
    return (
         <AuthProvider>
        <SessionProvider>
            {children}
            </SessionProvider> 
       </AuthProvider>     
    )
}
export default GlobalProvider