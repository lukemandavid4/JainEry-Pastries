import Link from "next/link";
import Image from "next/image";
import { Outfit } from '@next/font/google';
import { IoCart } from "react-icons/io5";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Home() {
  return (
    <>
      <div className={ ` ${outfit.className} h-[5.5rem] px-[23rem] bg-[var(--color-white)] flex items-center justify-between`}>
        <div>
          <Link href='/'><Image src='/home/logo.png' width={125} height={50} alt="logo"></Image></Link>
        </div>
        <div className="flex gap-[2.5rem] font-medium text-[1.125rem]">
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/products'>Products</Link>
          <Link href='/blogs'>Blogs</Link>
          <Link href=''>Pages</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className="flex items-center gap-[2rem]">
        <button className="border-[1px] p-[0.5rem] border-[var(--color-grey)] rounded-[50%]"><IoCart className="text-[1.5rem]"/></button>
        <Link href='/contact' className="bg-[var(--color-three)] text-[var(--color-white)] px-[2rem] py-[1rem] rounded-[50vw] font-medium text-[1.1875rem]">Book Reservartion</Link>
        </div>
      </div>
    </>
  );
}
