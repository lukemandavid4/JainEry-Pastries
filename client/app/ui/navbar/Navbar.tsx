"use client";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const handleLogin = () => {
    setLogin(!login);
    if (register) setRegister(false);
  };

  const handleRegister = () => {
    setRegister(!register);
    if (login) setLogin(false);
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
      <div
        className={`w-full h-full bg-[#000000B3] fixed z-[9999999] ${
          login ? "flex" : "hidden"
        }`}
      >
        <div className="w-[25rem] p-8 flex flex-col gap-2 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md">
          <div className="flex justify-between">
            <h4 className="font-bold text-[var(--color-two)] text-[1.2rem]">
              Login
            </h4>
            <IoClose
              className={`text-[1.5rem] text-[var(--color-two)]
          cursor-pointer`}
              onClick={handleLogin}
            />
          </div>
          <form className="flex flex-col gap-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-[1px] border-[var(--color-four)] py-1 px-2 rounded-[0.25rem] text-[0.9rem] outline-none focus:border-[var(--color-three)] focus:border-[1px]"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border-[1px] border-[var(--color-four)] py-1 px-2 rounded-[0.25rem] text-[0.9rem] outline-none focus:border-[var(--color-three)] focus:border-[1px]"
            />
            <button
              type="submit"
              className="bg-[var(--color-three)] text-white py-2 rounded-[0.25rem] hover:bg-[var(--color-two)] transition-colors duration-300"
            >
              Login
            </button>
          </form>
          <div className="flex gap-1 mt-4">
            <p>Create a new account?</p>
            <button
              onClick={handleRegister}
              className="text-[var(--color-three)]"
            >
              Click here
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full bg-[#000000B3] fixed z-[9999999] ${
          register ? "flex" : "hidden"
        }`}
      >
        <div className="w-[25rem] p-8 flex flex-col gap-2 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md">
          <div className="flex justify-between">
            <h4 className="font-bold text-[var(--color-two)] text-[1.2rem]">
              Sign Up
            </h4>
            <IoClose
              onClick={handleRegister}
              className={`text-[1.5rem] text-[var(--color-two)]
          cursor-pointer`}
            />
          </div>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border-[1px] border-[var(--color-four)] py-1 px-2 rounded-[0.25rem] text-[0.9rem] outline-none focus:border-[var(--color-three)] focus:border-[1px]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-[1px] border-[var(--color-four)] py-1 px-2 rounded-[0.25rem] text-[0.9rem] outline-none focus:border-[var(--color-three)] focus:border-[1px]"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border-[1px] border-[var(--color-four)] py-1 px-2 rounded-[0.25rem] text-[0.9rem] outline-none focus:border-[var(--color-three)] focus:border-[1px]"
            />
            <button
              type="submit"
              className="bg-[var(--color-three)] text-white py-2 rounded-[0.25rem] hover:bg-[var(--color-two)] transition-colors duration-300"
            >
              Create Account
            </button>
          </form>
          <div className="flex gap-1 mt-4">
            <p>Already have an account?</p>
            <button className="text-[var(--color-three)]" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
