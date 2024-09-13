"use client";
import { Session } from "inspector/promises";
import { SessionProvider as Provider } from "next-auth/react";

type props = {
  children: React.ReactNode;
}

function SessionProvider({children}: props) {
  return (
      <Provider>
        {children}
      </Provider>
   
  );
}

export default SessionProvider;
