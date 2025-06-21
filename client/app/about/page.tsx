import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { TbClock24 } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { chefs, People } from "../ui/data/data";

const page = () => {
  return (
    <>
      <div className="bg-[url('/about/background-jainery.png')] bg-[var(--color-five)]">
        <div className="min-h-[15rem] md:min-h-[27.25rem] bg-cover max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
          <h1 className="text-[var(--color-two)] text-[2.25rem] md:text-[4.25rem] lg:text-[4.7rem] font-bold">
            About Us
          </h1>
          <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
            <Link
              href="/"
              className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]"
            >
              Home
            </Link>
            <span className="text-[var(--color-white)]">
              &#47;&#47; About Us
            </span>
          </div>
        </div>
      </div>
      <div className="py-[5rem] lg:py-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        <div className="flex justify-center w-[calc(50%-1rem)]">
          <Image
            src="/about/baker.png"
            width={450}
            height={100}
            alt="baker"
            className="rounded-lg"
          ></Image>
        </div>
        <div className="flex flex-col gap-[1.5rem] w-[calc(50%-1rem)]">
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
              ABOUT US
            </span>
          </div>
          <h1 className="text-[1.75rem] md:text-[2.75rem] md:leading-[2.9rem] lg:text-[3rem] text-[var(--color-two)] font-bold leading-[2.18rem] lg:leading-[3.5rem]">
            We provide 100% halal bakery product.
          </h1>
          <p className="text-[1.125rem] text-[var(--color-four)]">
            Welcome to JainEry, your new favorite place for indulgent,
            handcrafted pastries delivered straight to your doorstep! What
            started as a simple love for baking has grown into a full-fledged
            passion project dedicated to bringing joy, comfort, and sweetness
            into people&apos;s lives. Our journey began with a home oven, a few
            trusted family recipes, and a big dream: to share the magic of
            freshly baked goods with as many people as possible, no matter where
            they are.
          </p>
          <p className="text-[1.125rem] text-[var(--color-four)]">
            We&apos;re more than just a pastry shop, we&apos;re a modern,
            customer-focused bakery that blends tradition with convenience. Our
            online platform makes it easy for you to browse our menu, place
            orders, and get your goodies delivered fresh, without stepping out
            of your home. Whether you&apos;re treating yourself after a long
            day, sending a sweet gift to someone special, or planning a
            celebration, we&apos;re here to make it memorable and
            mouthwatering.Thank you for letting us be a part of your sweetest
            moments.
          </p>
          <Link
            href="/shop"
            className="bg-[var(--color-three)] flex px-[2rem] md:px-[3rem] rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s] self-start"
          >
            <span className="text-[1.125rem] font-medium">Contact Us</span>
            <FaArrowRightLong className="text-[1.125rem] font-bold" />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap pb-[5rem] justify-between space-y-4">
        <div className="bg-[var(--color-five)] px-[1.5rem] md:px-[2.5rem] py-[2rem] md:py-[3rem] rounded-[1rem] flex flex-col gap-[0.5rem] md:gap-[1.5rem] w-full md:w-[calc(50%-1rem)]">
          <h1 className="text-[2rem] font-bold text-[var(--color-two)]">
            Our Mission
          </h1>
          <span className="text-[var(--color-four)] text-[1.0625rem]">
            At JainEry, our mission is to spread happiness one bite at a time by
            offering an irresistible selection of freshly baked pastries,
            cookies, and cakes—all crafted with love and delivered with care. We
            are passionate about quality, using only the finest ingredients and
            traditional recipes with a modern twist to create treats that feel
            homemade and taste unforgettable. Through our user-friendly online
            platform, we aim to make every customer&apos;s experience as sweet
            and satisfying as the desserts we bake—convenient, reliable, and
            full of flavor. Whether it&apos;s a simple indulgence, a thoughtful
            gift, or a celebration, we are here to make life just a little
            sweeter.
          </span>
        </div>
        <div className="bg-[var(--color-five)] px-[1.5rem] md:px-[2.5rem] py-[2rem] md:py-[3rem] rounded-[1rem] flex flex-col gap-[0.5rem] md:gap-[1.5rem] w-full md:w-[calc(50%-1rem)]">
          <h1 className="text-[2rem] font-bold text-[var(--color-two)]">
            Our Vision
          </h1>
          <span className="text-[var(--color-four)] text-[1.0625rem]">
            Our vision is to become a leading online pastry shop that redefines
            the way people enjoy baked goods by blending tradition with
            innovation. We strive to build a trusted brand that customers can
            rely on for quality, creativity, and heartfelt service. In the
            coming years, we envision expanding our reach across the region and
            beyond, offering a wider variety of pastries and personalized
            creations to suit every taste, occasion, and dietary need. More than
            just a shop, we dream of being a beloved part of people&apos;s
            celebrations and everyday moments—spreading joy, one delicious order
            at a time.
          </span>
        </div>
      </div>
      <div className="min-h-[16.25rem] py-[2.5rem] bg-[var(--color-three)] bg-[url('/home/home-background.svg')] px-[2rem] xl:px-lr-custom flex items-center flex-col md:flex-row gap-[3rem]">
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
      <div className="lg:min-h-screen py-[3rem] lg:py-[7.5rem] bg-[linear-gradient(#fff5ed,_#fff)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
              TEAM MEMBERS
            </span>
          </div>
          <div className="text-center mt-[4rem] lg:mt-[2rem]">
            <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] font-bold">
              Our Expert Chef
            </h1>
          </div>
          <div className="flex flex-wrap my-[2rem] md:my-[5rem] justify-between space-y-4">
            {chefs.map((chef: People) => (
              <div
                key={chef.id}
                className="min-h-[22.875rem] shadow-sm rounded-[0.5rem] bg-[var(--color-white)] p-[1rem] text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]"
              >
                <div
                  className="min-h-[14.125rem] 2sm:min-h-[25.125rem] md:min-h-[14.125rem] bg-center bg-cover rounded-[0.5rem]"
                  style={{ backgroundImage: `url(${chef.image})` }}
                ></div>
                <h1 className="text-[1.25rem] text-[var(--color-two)] font-semibold mt-[2.5rem]">
                  {chef.name}
                </h1>
                <p className="text-[var(--color-four)]">{chef.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
