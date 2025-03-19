// components/Layout.tsx
import React from "react";
import Navbar from "./navbar/Navbar";
import { Footer } from "./footer/footer";
import { CartProvider } from "./cartContext/cartContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
};

export default Layout;
