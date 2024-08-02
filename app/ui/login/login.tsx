import React from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
const Login = ({ otherStyles }) => {
  return (
    <main
      className={`w-[25rem] p-8 flex flex-col gap-2 ${otherStyles} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md`}
    >
      <div className="flex justify-between">
        <h4 className="font-bold text-[var(--color-two)] text-[1.2rem]">
          Login
        </h4>
        <IoClose
          className={`text-[1.5rem] text-[var(--color-two)]
          cursor-pointer`}
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
        <Link href="" className="text-[var(--color-three)]">
          Click here
        </Link>
      </div>
    </main>
  );
};

export default Login;
