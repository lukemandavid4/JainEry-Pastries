"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Cart from "../cart/cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const handleOpenCart = () => {
    setOpenCart(!openCart);
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
          className={`gap-[2.5rem] font-medium text-[1.1rem] text-[var(--color-one)] fixed bg-[#f9e3d0] lg:bg-[var(--color-white)] flex flex-col pl-[2rem] top-0 w-[75vw] pt-[5.5rem] lg:pt-0 lg:w-auto lg:flex-row h-full lg:h-auto lg:static transition-left duration-300 ${
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
            className="border-[1px] p-[0.5rem] border-[var(--color-grey)] rounded-[50%]"
            onClick={handleOpenCart}
            aria-label="Toggle cart"
          >
            <TiShoppingCart className="text-[1.5rem]" />
          </button>
          <Link
            href="/contact"
            className="bg-[var(--color-three)] text-[var(--color-white)] px-[2rem] py-[1rem] rounded-[50vw] font-medium text-[1rem] hover:bg-[var(--color-two)] transition-colors duration-300 hidden lg:flex"
          >
            Book Reservation
          </Link>
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
      <Cart otherStyles={`${openCart ? "right-0" : "right-[-100%]"}`} />
    </>
  );
};

export default Navbar;
