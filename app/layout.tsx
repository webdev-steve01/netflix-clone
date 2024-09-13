import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./Nav";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Main from "./signin/Main";
import SessionProvider from "./SessionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not netflix nigeria😉",
  description: "Notflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getServerSession(authOptions)
  return (
    <html lang="en">
      <link rel="shortcut icon" href="netflix-svgrepo-com.svg" type="image/x-icon" />
      <body className={inter.className}>
        <section>
          <SessionProvider>
            {children}
          </SessionProvider>
        </section>
      </body>
    </html>
  );
}
