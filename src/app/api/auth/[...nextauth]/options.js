import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const options = {
    providers: [
        GoogleProvider({
            profile(profile) {
        console.log('profile', profile);
        return {
          ...profile,
          role: profile.role ?? "user",
          id: profile.id,
          email: profile.email,
        };
      },
            clientId: process.env.GOOGLE_CLIENT_ID,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username is you email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "Dave", password: "nextauth" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
    })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user)token.role =user.role
      return { ...token, ...user };
    },

    async session({ session, token }) {
      if(session?.user)session.user.role = token.role;
      return session;
    },
  },

//      callbacks: {
//     async signIn({ account, profile }) {
//       if (account.provider === "google") {
//         return profile.email_verified && profile.email.endsWith("@example.com")
//       }
//       return true // Do different verification for other providers that don't have `email_verified`
//     },
//   }
}
export default options;