import { auth } from "@/app/firebase";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider  from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials): Promise<any>{
        return await signInWithEmailAndPassword(auth, (credentials as any).email || "", (credentials as any).password || "").then(userCredentials => {
          if (userCredentials.user) {
            return userCredentials.user
          }
          return null;
        }).catch(err => console.log(err)
        )
      }
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
