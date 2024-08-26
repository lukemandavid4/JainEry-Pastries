import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Layout from "./ui/layout";
import Head from "next/head";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JainEry Foods",
  icons: {
    icon: "/home/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="/home/icon.png" />
      </Head>
      <body className={`${outfit.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
