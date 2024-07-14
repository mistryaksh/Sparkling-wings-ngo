import React, { FC, ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
// import { Footer } from "./footer";

export interface MainLayoutProps {
  children: ReactNode;
}

export const Layout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="relative -z-10">{children}</main>
      <Footer />
    </>
  );
};
