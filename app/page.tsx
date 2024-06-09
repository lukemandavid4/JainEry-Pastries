import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import data, {BakeryItem} from "./ui/data/data";
import { TbTruckDelivery } from "react-icons/tb";
import { TbClock24 } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { items, BakeryItems } from "./ui/data/data";

export default function Home() {
  return (
    <div className="">
      <div className="flex px-[23rem] py-[8.25rem] h-[48.875rem] bg-[url('../public/home/background-jainery.png')] bg-center bg-cover bg-[var(--color-five)] justify-between gap-[1rem]">
        <div className="flex flex-col gap-[1.5rem] w-[40%]">
          <h1 className="text-[var(--color-three)] text-[1.875rem] font-medium">Get 80% discount</h1>
          <p className="text-[var(--color-two)] text-[8.625rem] font-extrabold leading-[8.125rem]">Fresh Bakery Foods.</p>
          <Link href='/shop' className="bg-[var(--color-three)] flex max-w-[12rem] rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)]">
            <span className="text-[1.125rem] font-medium">Shop Now</span>
            <FaArrowRightLong className="text-[1.125rem] font-bold"/>
          </Link>
        </div>
        <div className="flex items-center w-[7%] justify-center">
          <Image src='/home/line.svg' width={35} height={10} alt="line"></Image>
        </div>
        <div className="w-[43%] flex justify-center">
          <Image src='/home/basket.png' width={500} height={100} alt="basket"></Image>
        </div>
      </div>
      <div className="h-[28.75rem] flex px-[23rem] items-center justify-between">
        {data.map((item: BakeryItem) => (
          <Link key={item.id} href={item.href} className="flex flex-col gap-[1rem] items-center  border-[var(--color-five)] border-[3px] rounded-[50%] px-[3rem] py-[2rem] hover:border-dashed hover:border-[var(--color-three)] hover:bg-[--color-five] [transition:background_0.3s,_border_0.3s] group">
            <Image src={item.image} width={150} height={300} alt="switch roll"></Image>
            <span className="text-[1.5rem] font-semibold text-[var(--color-one)] group-hover:text-[var(--color-three)] [transition:color_0.3s]">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="h-[16.25rem] bg-[var(--color-three)] bg-[url('/home/home-background.svg')] px-[23rem] flex items-center">
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <TbTruckDelivery className="text-[var(--color-black)] text-[2.5rem]"/>
          </div>
          <div className="">
            <h1 className="text-[var(--color-white)] text-[1.5625rem] font-bold text-center">Free Delivery</h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">Enjoy complimentary shipping on all orders over Ksh. 5,000.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <TbClock24 className="text-[var(--color-black)] text-[2.5rem]"/>
          </div>
          <div className="">
            <h1 className="text-[var(--color-white)] text-[1.5625rem] font-bold text-center">24/07 Support</h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">Our dedicated support team is available 24/7 to assist you.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <RiMoneyDollarCircleLine className="text-[var(--color-black)] text-[2.5rem]"/>
          </div>
          <div className="">
            <h1 className="text-[var(--color-white)] text-[1.5625rem] font-bold text-center"> Secure Payment</h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">Rest assured with our secure payment system, ensuring your transactions are safe</p>
          </div>
        </div>
      </div>
      <div className="py-[7.5rem] bg-[var(--color-five)] px-[23rem]">
        <div className="text-center">
          <span className="text-[var(--color-three)] font-medium text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">LATEST PRODUCTS</span>
        </div>
        <div className="text-center mt-[2rem]">
          <h1 className="text-[3rem] text-[var(--color-two)] font-bold">Special Bakery Products</h1>
        </div>
        <div className="flex mt-[5rem] flex-wrap gap-[1rem]">
          {items.map((product: BakeryItems) => (
            <Link href='' key={product.id} className="flex flex-col items-center px-[3rem] py-[2rem] bg-[var(--color-white)] rounded-[0.5rem] shadow-sm hover:shadow-lg w-[25%] justify-between transition-shadow duration-300">
              <Image src={product.image} width={150} height={100} alt="croissant"></Image>
              <div className="mt-[2.5rem] text-center">
                <span className="text-[1.2rem] text-[var(--color-one)] font-semibold">{product.name}</span>
                <div className="flex justify-between gap-[1rem]">
                  <span className="text-[1.2rem] font-medium text-[--color-three]">Ksh.{product.priceNew}</span>
                  <span className="text-[var(--color-six)] text-[1.2rem] line-through font-medium">Ksh.{product.priceOld}</span>
              </div>
              </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
