// components/Layout.tsx
import React from 'react';
import Navbar from './navbar/Navbar';
import {Footer} from './footer/footer';

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
