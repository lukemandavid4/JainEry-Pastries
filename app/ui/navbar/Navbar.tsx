'use client'
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () =>{
    setOpen(!open)
  }
  return (
    <>
      <div className= 'h-[5.5rem] px-[2rem] md:px-lr-custom bg-[var(--color-white)] flex items-center justify-between relative md:static'>
        <div>
          <Link href='/'><Image src='/home/logo.png' width={125} height={50} alt="logo"></Image></Link>
        </div>
        <div className={`gap-[2.5rem] font-medium text-[1.125rem] text-[var(--color-one)] absolute bg-[#f9e3d0] flex flex-col items-center top-0 left-[-100%] pt-[5.5rem] w-[100vw] h-[100dvh] md:static md:flex ${open ? 'opacity-0 pointer-events-none': ''}`}>
          <Link href='/' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">Home</Link>
          <Link href='/about' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">About</Link>
          <Link href='/shop' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">Products</Link>
          <Link href='/blog' className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] [transition:color_0.3s]">Blogs</Link>
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
          <div className="p-[0.5rem] bg-[var(--color-two)] rounded-[50%] cursor-pointer absolute top-[2rem] right-[2rem]">
          <IoClose className="text-[1.5rem] text-[var(--color-white)]" onClick={handleClick}/>
          </div>
        </div>
        <div className="flex items-center gap-[2rem]">
          <button className="border-[1px] p-[0.5rem] border-[var(--color-grey)] rounded-[50%]"><TiShoppingCart  className="text-[1.5rem]"/></button>
          <Link href='/contact' className="bg-[var(--color-three)] text-[var(--color-white)] px-[2rem] py-[1rem] rounded-[50vw] font-medium text-[1.1875rem] hover:bg-[var(--color-two)] [transition:background_0.3s] hidden md:flex">Book Reservartion</Link>
          <div className="bg-[var(--color-two)] p-[0.4rem] rounded cursor-pointer flex md:hidden">
            <CgMenuRightAlt className="text-[1.5rem] text-[var(--color-white)]"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
