import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "./Provider";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CyberGeek',
  description: 'Home Page of CyberGeek',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
