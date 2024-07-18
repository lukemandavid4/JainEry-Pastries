// components/Layout.tsx
import React from "react";
import Navbar from "./navbar/Navbar";
import { Footer } from "./footer/footer";
import Cart from "./cart/cart";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
