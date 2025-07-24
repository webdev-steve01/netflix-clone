import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
// import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

// ✅ Rename `inter` to match the font name
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // optional: add needed weights
  display: "swap",
  variable: "--font-open-sans", // optional: useful with Tailwind
});

export const metadata: Metadata = {
  title: "NewFlix",
  description: "Keep track of latest movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <link
          rel="shortcut icon"
          href="/netflix-svgrepo-com.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
