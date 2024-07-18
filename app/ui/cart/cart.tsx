"use client";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
type CartProps = {
  otherStyles: any;
};

const Cart: React.FC<CartProps> = ({ otherStyles }) => {
  const [close, setClose] = useState(false);
  const handleClick = () => {
    setClose(!close);
  };
  return (
    <main
      className={`fixed bg-white top-0 w-full 2sm:w-[30rem] h-full py-6 ${
        close ? "right-[-100%]" : ""
      } [transition:right_,0.3s] ${otherStyles}`}
    >
      <div className="flex items-center justify-between px-6">
        <h1 className="text-[1.4375rem] font-bold text-[var(--color-two)]">
          Your Cart
        </h1>
        <IoClose
          className="text-[1.8rem] cursor-pointer text-[var(--color-two)]"
          onClick={handleClick}
        />
      </div>
      <hr className="mt-3" />
      <div className="px-6 h-full">Hello</div>
      <hr />
      <div className="px-6 absolute bottom-5 w-full flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-[var(--color-four)]">Subtotal</span>
          <span className="font-bold text-[var(--color-four)]">Ksh. 250</span>
        </div>
        <Link
          href="/shop"
          className="bg-[var(--color-three)] flex px-[2rem] md:px-[3rem] rounded-[50vw] items-center justify-center font-medium gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s] self-stretch"
        >
          Continue To Checkout
        </Link>
      </div>
    </main>
  );
};

export default Cart;
