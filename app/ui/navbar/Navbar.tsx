import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className= 'h-[5.5rem] px-lr-custom bg-[var(--color-white)] flex items-center justify-between'>
        <div>
          <Link href='/'><Image src='/home/logo.png' width={125} height={50} alt="logo"></Image></Link>
        </div>
        <div className="flex gap-[2.5rem] font-medium text-[1.125rem] text-[var(--color-one)]">
          <Link href='/' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">Home</Link>
          <Link href='/about' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">About</Link>
          <Link href='/products' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">Products</Link>
          <Link href='/blogs' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">Blogs</Link>
          <div>
            <div className="cursor-pointer focus:text-[var(--color-three)]">
              <button className=" flex items-center gap-[0.3rem] hover:text-[var(--color-three)] [transition:color_0.3s]">Pages <IoIosArrowDown /></button>
            </div>
            <div className="flex-col hidden">
              <span>FAQ</span>
              <span>404</span>
            </div>
          </div>
          <Link href='/contact' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">Contact</Link>
        </div>
        <div className="flex items-center gap-[2rem]">
          <button className="border-[1px] p-[0.5rem] border-[var(--color-grey)] rounded-[50%]"><MdShoppingCart className="text-[1.5rem]"/></button>
          <Link href='/contact' className="bg-[var(--color-three)] text-[var(--color-white)] px-[2rem] py-[1rem] rounded-[50vw] font-medium text-[1.1875rem] hover:bg-[var(--color-two)] [transition:background_0.3s]">Book Reservartion</Link>
          <div className="bg-[var(--color-two)] p-[0.4rem] rounded cursor-pointer hidden">
            <CgMenuRightAlt className="text-[1.5rem] text-[var(--color-white)]"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
