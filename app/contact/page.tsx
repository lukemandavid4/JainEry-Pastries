"use client";
import Link from "next/link";
import { FormEvent } from "react";

const page = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="min-h-[15rem] md:min-h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-[2rem] md:px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[2.25rem] md:text-[4.69rem] font-bold">
          Contact Us
        </h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link
            href="/"
            className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]"
          >
            Home
          </Link>
          <span className="text-[var(--color-white)]">
            &#47;&#47; Contact Us
          </span>
        </div>
      </div>
      <div className="px-[2rem] md:px-lr-custom py-[6rem] flex flex-col md:flex-row gap-[2rem]">
        <div style={{ flexBasis: "calc(40% - 10px)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31913.268069306443!2d37.0802688!3d-1.0420224000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1718194243445!5m2!1sen!2ske"
            style={{ border: 0 }}
            className="w-[100%] md:w-[400px] min-h-[400px] md:min-h-[600px] rounded-[0.5rem]"
          ></iframe>
        </div>
        <div
          className="flex flex-col gap-[2.5rem]"
          style={{ flexBasis: "calc(60% - 10px)" }}
        >
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
              CONTACT US
            </span>
          </div>
          <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] leading-normal font-bold md:leading-[3.5rem]">
            How can we help you?
          </h1>
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
        </div>
      </div>
    </>
  );
};

export default page;
