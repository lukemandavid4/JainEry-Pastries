"use client";
import { FormEvent } from "react";
const Form = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-[1rem]">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name:"
          className="w-[100%] rounded-[0.5rem] px-[2rem] py-[1rem] text-[0.9rem] focus:border-[var(--color-three)] focus:border-[1px]  border-[1px] border-[var(--color-five)] outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email:"
          className="w-[100%] rounded-[0.5rem] px-[2rem] py-[1rem] text-[0.9rem] focus:border-[var(--color-three)] focus:border-[1px]  border-[1px] border-[var(--color-five)] outline-none"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-[1rem]">
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Phone:"
          className="w-[100%] rounded-[0.5rem] px-[2rem] py-[1rem] text-[0.9rem] focus:border-[var(--color-three)] focus:border-[1px]  border-[1px] border-[var(--color-five)] outline-none"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject:"
          className="w-[100%] rounded-[0.5rem] px-[2rem] py-[1rem] text-[0.9rem] focus:border-[var(--color-three)] focus:border-[1px]  border-[1px] border-[var(--color-five)] outline-none"
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="resize-none w-[100%] rounded-[0.5rem] px-[2rem] py-[1rem] text-[0.9rem] focus:border-[var(--color-three)] focus:border-[1px]  border-[1px] border-[var(--color-five)] outline-none"
          placeholder="Write your message..."
        />
      </div>
      <div className="flex">
        <button
          type="submit"
          className="bg-[var(--color-three)] flex px-[2rem] md:px-[3rem] self-start rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
