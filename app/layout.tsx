import ClientOnly from "@/app/components/ClientOnly";
import SearchModal from "@/app/components/modals/SearchModal";
import { Nunito } from "next/font/google";
import React from "react";
import { getCurrentUser } from "./actions/getCurrentUser";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import Navbar from "./components/navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone!",
};

const font = Nunito({ subsets: ["latin"] });

async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
