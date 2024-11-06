
import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header";
import Biodata from "../components/Biodata";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>

        {children}
        <Biodata/>
        <Footer/>
      </body>
    </html>
  );
}