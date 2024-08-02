"use client";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Login from "../login/login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <>
      <div className="h-[5.5rem] px-[2rem] xl:px-lr-custom bg-[var(--color-white)] flex items-center justify-between relative lg:static">
        <div>
          <Link href="/">
            <Image src="/home/logo.png" width={125} height={50} alt="logo" />
          </Link>
        </div>
        <nav
          className={`gap-[2.5rem] font-medium text-[1.1rem] text-[var(--color-one)] fixed bg-[#f9e3d0] lg:bg-[var(--color-white)] flex flex-col pl-[2rem] top-0 w-[75vw] pt-[5.5rem] lg:pt-0 lg:w-auto lg:flex-row h-full lg:h-auto lg:static transition-left duration-100 ${
            open ? "left-0 fixed" : "left-[-110%]"
          } z-[999]`}
          onClick={handleToggleMenu}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/shop", label: "Products" },
            { href: "/blog", label: "Blogs" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus:text-[var(--color-three)] hover:text-[var(--color-three)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-[2rem] xl:gap-4">
          <button
            className="border-[1px] p-[0.5rem] border-[var(--color-grey)] rounded-[50%] relative"
            onClick={handleOpenCart}
            aria-label="Toggle cart"
          >
            <TiShoppingCart className="text-[1.5rem]" />
            <div className="absolute size-5 text-white rounded-[50%] flex items-center justify-center bg-[var(--color-three)] text-[0.8rem] font-bold top-[-0.5rem] right-[-0.1rem]">
              5
            </div>
          </button>
          <button
            className="bg-[var(--color-three)] text-[var(--color-white)] px-[2rem] py-[0.5rem] rounded-[50vw] font-medium text-[1rem] hover:bg-[var(--color-two)] transition-colors duration-300"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <div
            className="bg-[var(--color-two)] p-[0.4rem] rounded cursor-pointer flex lg:hidden"
            onClick={handleToggleMenu}
          >
            <CgMenuRightAlt
              className={`text-[1.5rem] text-[var(--color-white)] ${
                open ? "hidden" : "flex"
              }`}
            />
            <IoClose
              className={`text-[1.5rem] text-[var(--color-white)] ${
                open ? "flex" : "hidden"
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed bg-white top-0 w-full 2sm:w-[30rem] h-full py-6 z-[10000] ${
          openCart ? "right-0" : "right-[-100%]"
        } transition-right duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-6">
          <h1 className="text-[1.4375rem] font-bold text-[var(--color-two)]">
            Your Cart
          </h1>
          <IoClose
            className="text-[1.8rem] cursor-pointer text-[var(--color-two)]"
            aria-label="Close cart"
            onClick={handleOpenCart}
          />
        </div>
        <hr className="mt-3" />
        <div className="px-6 py-4 h-full flex gap-2">
          <div>
            <Image
              src="/home/cup-cake.png"
              width={50}
              height={100}
              alt="image"
            ></Image>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[var(--color-two)] text-[1.125rem] tracking-wider">
              Cup Cake
            </h1>
            <p className="text-[var(--color-four)]">Ksh. 250</p>
            <span className="text-red-500 cursor-pointer">Remove</span>
          </div>
        </div>
        <hr />
        <div className="px-6 absolute bottom-5 w-full flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="text-[var(--color-four)]">Subtotal</span>
            <span className="font-bold text-[var(--color-four)]">Ksh. 250</span>
          </div>
          <Link
            href="/shop"
            className="bg-[var(--color-three)] flex px-[2rem] md:px-[3rem] rounded-[50vw] items-center justify-center font-medium gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] transition-colors duration-300 self-stretch"
          >
            Continue To Checkout
          </Link>
        </div>
      </div>
      <Login otherStyles={login ? "flex" : "hidden"} />
    </>
  );
};

export default Navbar;
