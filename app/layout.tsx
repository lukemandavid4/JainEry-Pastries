import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Layout from "./ui/navbar/layout";
const outfit = Outfit({subsets: ['latin'],});

export const metadata: Metadata = {
  title: "JainEry Foods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
