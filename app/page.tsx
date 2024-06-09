import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import data, {BakeryItem} from "./ui/data/data";

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
    </div>
  );
}
