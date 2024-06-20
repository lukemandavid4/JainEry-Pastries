"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import data, { BakeryItem } from "./ui/data/data";
import { TbTruckDelivery } from "react-icons/tb";
import { TbClock24 } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { items, BakeryItems } from "./ui/data/data";
import { products, Products } from "./ui/data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row px-[2rem] lg:px-lr-custom py-[3rem] lg:py-[8.25rem] h-[48.875rem] bg-[url('/home/background-jainery.png')] bg-center bg-cover bg-[var(--color-five)] justify-between gap-[1rem]">
        <div className="flex flex-col  md:gap-[1.5rem] md:w-[50%]">
          <h1 className="text-[var(--color-three)] text-[1.25rem] md:text-[1.875rem] font-medium">
            Get 80% discount
          </h1>
          <p className="text-[var(--color-two)] text-[3.75rem] mb-[1.5rem] md:text-[8.625rem] font-bold md:font-extrabold leading-[3.5rem] md:leading-[8.125rem]">
            Fresh Bakery Foods.
          </p>
          <Link
            href="/shop"
            className="btn bg-[var(--color-three)] flex px-[1.5rem] md:px-[3rem] rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s] self-start"
          >
            <span className="text-[1.125rem] font-medium">Shop Now</span>
            <FaArrowRightLong className="text-[1.125rem] font-bold" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center lg:w-[7%] justify-center">
          <Image src="/home/line.svg" width={35} height={10} alt="line"></Image>
        </div>
        <div className="md:w-[50%] lg:w-[43%] flex justify-center">
          <Image
            src="/home/basket.png"
            width={500}
            height={100}
            alt="basket"
          ></Image>
        </div>
      </div>
      <div className="min-h-[28.75rem] py-[3rem] flex gap-[1.5rem] flex-col md:flex-row px-[2rem] md:px-lr-custom items-center justify-between">
        {data.map((item: BakeryItem) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col gap-[1rem] items-center  border-[var(--color-five)] border-[3px] rounded-[50%] px-[3rem] py-[2rem] hover:border-dashed hover:border-[var(--color-three)] hover:bg-[--color-five] [transition:background_0.3s,_border_0.3s] group"
          >
            <Image
              src={item.image}
              width={150}
              height={300}
              alt="switch roll"
            ></Image>
            <span className="text-[1.5rem] font-semibold text-[var(--color-one)] group-hover:text-[var(--color-three)] [transition:color_0.3s]">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="min-h-[16.25rem] py-[2.5rem] bg-[var(--color-three)] bg-[url('/home/home-background.svg')] px-[2rem] md:px-lr-custom flex items-center flex-col md:flex-row gap-[3rem]">
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <TbTruckDelivery className="text-[var(--color-black)] text-[2.5rem]" />
          </div>
          <div>
            <h1 className="text-[var(--color-white)] text-[1.375rem] md:text-[1.5625rem] font-bold text-center">
              Free Delivery
            </h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">
              Enjoy complimentary shipping on all orders over Ksh. 5,000.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <TbClock24 className="text-[var(--color-black)] text-[2.5rem]" />
          </div>
          <div>
            <h1 className="text-[var(--color-white)] text-[1.375rem] md:text-[1.5625rem] font-bold text-center">
              24/07 Support
            </h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">
              Our dedicated support team is available 24/7 to assist you.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <RiMoneyDollarCircleLine className="text-[var(--color-black)] text-[2.5rem]" />
          </div>
          <div>
            <h1 className="text-[var(--color-white)] text-[1.375rem] md:text-[1.5625rem] font-bold text-center">
              {" "}
              Secure Payment
            </h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">
              Rest assured with our secure payment system, ensuring your
              transactions are safe
            </p>
          </div>
        </div>
      </div>
      <div className="py-[3.5rem] md:py-[7.5rem] bg-[linear-gradient(#fff5ed,_#fff)] px-[2rem] md:px-lr-custom">
        <div className="text-center">
          <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
            LATEST PRODUCTS
          </span>
        </div>
        <div className="text-center mt-[1rem] md:mt-[2rem]">
          <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] font-bold">
            Special Bakery Products
          </h1>
        </div>
        <div className="flex mt-[3rem] md:mt-[5rem] flex-col md:flex-row md:flex-wrap gap-[1.5rem]">
          {items.map((product: BakeryItems) => (
            <div
              key={product.id}
              className="flex flex-col items-center py-[2rem] bg-[var(--color-white)] rounded-[0.5rem] shadow-sm hover:shadow-lg md:w-calc-25-minus-10 justify-between transition-shadow duration-300 relative group"
            >
              <Link href={product.href}>
                <Image
                  src={product.image}
                  width={150}
                  height={100}
                  alt="croissant"
                ></Image>
              </Link>
              <div className="mt-[2.5rem] text-center group-hover:opacity-0 [transition:opacity_0.3s] group-hover:pointer-events-none">
                <span className="text-[1.2rem] text-[var(--color-one)] font-semibold">
                  {product.name}
                </span>
                <div className="flex justify-between gap-[1rem]">
                  <span className="text-[1.2rem] font-medium text-[--color-three]">
                    Ksh.{product.priceNew}
                  </span>
                  <span className="text-[var(--color-six)] text-[1.2rem] line-through font-medium">
                    Ksh.{product.priceOld}
                  </span>
                </div>
              </div>
              <Link
                href=""
                className="flex justify-center bg-[var(--color-three)] text-[var(--color-white)] w-[10rem] py-[0.5rem] rounded-[50vw] font-medium text-[1.1875rem] hover:bg-[var(--color-two)] [transition:background_0.3s,_bottom_0.3s,_opacity_0.3s] bottom-[1rem] left-[50%] translate-x-[-50%] absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:bottom-[2rem] group-hover:pointer-events-auto"
              >
                Add to Cart
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="max-h-[26.5rem] py-[3rem] md:py-0 bg-[var(--color-five)] px-[2rem] md:px-lr-custom flex gap-[4rem]">
        <Image
          src="/home/banner.png"
          width={550}
          height={100}
          alt="banner"
          className="hidden md:flex"
        ></Image>
        <div className="flex flex-col justify-center gap-[0.5rem] md:gap-0">
          <h1 className="text-[1.56rem] md:text-[1.875rem] text-[var(--color-three)] font-semibold">
            Offer For Customer.
          </h1>
          <p className="text-[2.625rem] md:text-[3.75rem] text-[--color-two] leading-[2.875rem] md:leading-normal font-bold ">
            All Products
            <span className="text-[var(--color-three)] underline"> 80%</span>{" "}
            Discount.
          </p>
          <Link
            href="/shop"
            className="bg-[var(--color-three)] flex px-[2rem] md:px-[3rem] rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s] self-start"
          >
            <span className="text-[1.125rem] font-medium">Shop Now</span>
            <FaArrowRightLong className="text-[1.125rem] font-bold" />
          </Link>
        </div>
      </div>
      <div className="bg-[linear-gradient(#fff,_#fff5ed)] px-[2rem] md:px-lr-custom py-[3rem] md:py-[7.5rem]">
        <div className="text-center">
          <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
            LATEST BLOG POST
          </span>
        </div>
        <div className="text-center mt-[1rem] md:mt-[2rem]">
          <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] font-bold">
            Latest News & Article
          </h1>
        </div>
        <div className="mt-[2rem] md:mt-[5rem] flex flex-col md:flex-row md:flex-wrap gap-[1.5rem]">
          {products.slice(0, 3).map((product: Products) => (
            <div
              key={product.id}
              className="min-h-[30.5rem] md:min-h-[32rem] p-[1rem] md:p-[1.5rem] bg-[linear-gradient(#fff5ed,_#f9e3d0)] shadow-md rounded-[0.5rem] flex flex-col gap-[1rem] box-border"
              style={{ flexBasis: "calc(33.33% - 20px)" }}
            >
              <div
                className="bg-center bg-cover w-[100%] min-h-[15rem] rounded-[0.5rem]"
                style={{ backgroundImage: `url(${product.background})` }}
              ></div>
              <h1 className="text-[0.8125rem] md:text-[1rem] text-[var(--color-three)] font-semibold mt-[1rem]">
                {product.date}
              </h1>
              <p className="text-[1.2rem] md:text-[1.4rem] text-[var(--color-one)] font-semibold">
                {product.content}
              </p>
              <div className="mt-[1rem]">
                <Link
                  href=""
                  className="text-[var(--color-one)] text-[0.9rem] font-medium border-[var(--color-three)] border-[2px] border-solid px-[2rem] py-[0.8rem] rounded-[0.3rem] hover:text-[var(--color-white)] hover:bg-[var(--color-three)] [transition:background_0.3s,_color_0.3s]"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[5rem] md:mt-[10rem] md:mb-[-11rem]">
          <div className="text-center">
            <span className="text-[var(--color-three)] font-medium text-[0.8125rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
              BOOK RESERVATION
            </span>
          </div>
          <div className="text-center my-[2rem]">
            <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] font-bold">
              Book Our Reservation
            </h1>
          </div>
          <div className="min-h-[40rem] bg-[url('/home/book.jpg')] bg-cover bg-center w-full rounded-[0.7rem] p-[2rem] md:p-[4rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col md:flex-row justify-between gap-[1rem]">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name:"
                className="px-[2rem] py-[1rem] rounded-[0.5rem] text-[0.9rem] focus:outline-dashed outline-[1px] outline-[var(--color-three)]"
                style={{ flexBasis: "calc(33.33% - 10px)" }}
              />
              <input
                type="tel"
                name="number"
                id="number"
                placeholder="Phone Number:"
                className="px-[2rem] py-[1rem] rounded-[0.5rem] text-[0.9rem] focus:outline-dashed outline-[1px] outline-[var(--color-three)]"
                style={{ flexBasis: "calc(33.33% - 10px)" }}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address:"
                className="px-[2rem] py-[1rem] rounded-[0.5rem] text-[0.9rem] focus:outline-dashed outline-[1px] outline-[var(--color-three)]"
                style={{ flexBasis: "calc(33.33% - 10px)" }}
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="resize-none w-[100%] rounded-[0.5rem] px-[2rem] py-[1rem] text-[0.9rem] focus:outline-dashed outline-[1px] outline-[var(--color-three)]"
              placeholder="Additional Message..."
            />
            <Link
              href="/contact"
              className="bg-[var(--color-three)] text-[var(--color-white)] px-[2rem] py-[1rem] rounded-[50vw] font-medium text-[1.1875rem] hover:bg-[var(--color-two)] [transition:background_0.3s] self-center mt-[2rem]"
            >
              Book Reservartion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
