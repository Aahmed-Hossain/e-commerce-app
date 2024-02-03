import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {icon: "https://i.ibb.co/FXJ2RL7/Screenshot-2024-01-10-104130-1.png"},
  title: "e-commerce ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
        {children}
      <Footer></Footer>
      </body>
      
    </html>
  );
}
