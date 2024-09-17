import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./Nav";
import "./globals.css";
import { getServerSession } from "next-auth";;
import Main from "./signin/Main";
import SessionProvider from "./SessionProvider";
// import Transition from "./Transition";




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
  return (
    <html lang="en">
      <link rel="shortcut icon" href="netflix-svgrepo-com.svg" type="image/x-icon" />
      <body className={inter.className}>
        {/* <Nav/> */}
        <section>
            <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
