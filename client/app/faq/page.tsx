"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(Array(7).fill(false));
  const handleClick = (index: number) => {
    setOpen(open.map((open, i) => (i === index ? !open : open)));
  };
  interface faq {
    id: number;
    question: string;
    answer: string;
  }
  const faqData: faq[] = [
    {
      id: 1,
      question: "Do you offer cake delivery in Nairobi?",
      answer:
        "You are in luck because Nairobi is our playground. You will get cakes delivered to your doorstep, same-day, next-day, or any day according to your schedule..",
    },
    {
      id: 2,
      question: "How long does it take to bake and deliver my cake?",
      answer:
        "Experience the delight of freshly baked cakes delivered to your doorstep. While we accept urgent orders delivered within 4 hours, we recommend placing your order at least one day in advance. If same-day delivery is necessary, talk to us directly to confirm the feasibility of your request. We also request your understanding as it is subject to the volume of prior bookings.",
    },
    {
      id: 3,
      question: "Do you bake healthy cakes?",
      answer:
        "Your health comes first, and that is why we have healthy cake options. Sugar-free cakes for diabetics? Check. How about eggless cakes for those with protein allergies? We have them too. I have a confession to make. We are mostly a request-and-do bakery. Every cake we bake is made to your specification. If you have a cake idea you would like implemented, including a specific type of healthy cake, we are the bakery you turn to. Share your requirements and we will craft a delightful treat for your upcoming occasion.",
    },
    {
      id: 4,
      question: "What types of cakes do you bake?",
      answer:
        "You think it, we bake it! Our talented pastry chefs will bring your imagination to reality. You will get cakes in any theme, flavor, and design. Birthday cakes? Check. Anniversary cakes? Check. Cupcakes? Check. Cake for kids? Why not? Baby showers and bridal shower cakes? You know we've got 'em. All types of cakes and pastries are available.",
    },
    {
      id: 5,
      question: "Are all your cakes freshly baked?",
      answer:
        "We guarantee that every cake delivered to you is fresh from the oven. You will experience the moist, soft, and flavorful delights from the best cake shop in Nairobi, Kenya.",
    },
    {
      id: 6,
      question: "What is the price of a 1kg cake at JainEry Pastry shop?",
      answer:
        "A simple 1kg cake costs KES 2500 at our cake shop. With some improvements in design, flavor, ingredients, and icing type, the price might increase. Not to worry though. We guarantee value for money. All this is to make your special occasion all glitters and fun.",
    },
    {
      id: 7,
      question: "Do you deliver surprise birthday cakes?",
      answer:
        "Send the most thoughtful happy birthday wishes gesture by letting us deliver a unique surprise birthday cake and other gifts. We help you pick trending, fashionable, and reasonably priced gift packs accompanying a fresh and delicious birthday cake.",
    },
  ];
  return (
    <>
      <div className="min-h-[15rem] md:min-h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-[2rem] lg:px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[2.25rem] md:text-[4.69rem] font-bold">
          FAQ
        </h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link
            href="/"
            className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]"
          >
            Home
          </Link>
          <span className="text-[var(--color-white)]">&#47;&#47; FAQ</span>
        </div>
      </div>
      <div className="px-[2rem] xl:px-lr-custom py-[6rem] flex flex-col md:flex-row gap-[2rem]">
        <div
          className="flex flex-col gap-[1rem]"
          style={{ flexBasis: "calc(60% - 10px)" }}
        >
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
              FAQ
            </span>
          </div>
          <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] leading-normal font-bold md:leading-[3.5rem] mb-[1rem]">
            Frequently Asked Questions
          </h1>
          <div className="w-full">
            {faqData.map((data: faq, index) => (
              <div key={data.id} className="w-full md:w-[90%]">
                <div
                  className="flex items-center justify-between cursor-pointer text-[1.1875rem] font-semibold text-[var(--color-two)] border-b-[1px] border-solid border-[var(--color-five)]"
                  onClick={() => handleClick(index)}
                >
                  <p className="py-[1rem] border-b-[1px_solid_var(--color-five)]">
                    {data.question}
                  </p>
                  <span
                    className={`${open[index] ? "rotate-180" : "rotate-0"}`}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={`text-[1.0625rem] text-[var(--color-four)] [transition:height_0.3s] ${
                    open[index]
                      ? "py-[1rem] max-h-[40rem] opacity-100 pointer-events-auto"
                      : "h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p>{data.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-fit bg-[var(--color-five)] py-[3rem] hidden md:flex justify-end rounded-xl"
          style={{ flexBasis: "calc(40% - 10px)" }}
        >
          <Image
            src="/faq/faq-image.png"
            width={450}
            height={100}
            alt="image"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Page;
