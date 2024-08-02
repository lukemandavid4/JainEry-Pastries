"use client";
import Link from "next/link";
import Image from "next/image";
import { items, BakeryItems } from "../ui/data/data";

const page = () => {
  return (
    <>
      <div className="min-h-[15rem] md:min-h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-[2rem] md:px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[2.25rem] md:text-[4.69rem] font-bold">
          Shop Page
        </h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link
            href="/"
            className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]"
          >
            Home
          </Link>
          <span className="text-[var(--color-white)]">&#47;&#47; Shop</span>
        </div>
      </div>
      <div className="py-[4rem] lg:py-[7.5rem] bg-[var(--color-white)] px-[2rem] xl:px-lr-custom">
        <div className="text-center">
          <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
            LATEST PRODUCTS
          </span>
        </div>
        <div className="text-center mt-[2rem]">
          <h1 className="text-[1.75rem] md:text-[3rem] leading-[2.18rem] md:leading-normal text-[var(--color-two)] font-bold">
            Special Bakery Products
          </h1>
        </div>
        <div className="flex mt-[3rem] lg:mt-[5rem] flex-col md:flex-row md:flex-wrap gap-[1.5rem]">
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
              <button className="bg-[var(--color-three)] text-[var(--color-white)] px-6 py-2 rounded-[50vw] font-medium text-[1.1875rem] hover:bg-[var(--color-two)] [transition:background_0.3s,_bottom_0.3s,_opacity_0.3s] bottom-[1rem] left-[50%] translate-x-[-50%] absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:bottom-[2rem] group-hover:pointer-events-auto">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
