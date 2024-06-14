import Link from "next/link"
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { TbClock24 } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { chefs, People } from "../ui/data/data";

const page = () => {
  return (
    <>
      <div className="min-h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-[2rem] md:px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[3.75rem] md:text-[4.69rem] font-bold">About Us</h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link href='/' className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]">Home</Link>
          <span className="text-[var(--color-white)]">&#47;&#47;  About Us</span>
        </div>
      </div>
      <div className="py-[10rem] px-lr-custom flex gap-[4rem]">
        <div className="flex justify-end" style={{flexBasis: 'calc(50% - 20px)'}}>
          <Image src='/about/baker.png' width={450} height={100} alt="baker"></Image>
        </div>
        <div style={{flexBasis: 'calc(50% - 20px)'}} className="flex flex-col gap-[1.5rem]">
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">ABOUT US</span>
          </div>
          <h1 className="text-[3rem] text-[var(--color-two)] font-bold leading-[3.5rem]">We provide 100% halal bakery product.</h1>
          <p className="text-[1.125rem] text-[var(--color-four)]">Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Erat velit scelerisque in dictum. Sit amet est placerat in.</p>
          <p className="text-[1.125rem] text-[var(--color-four)]">Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio.</p>
          <Link href='/shop' className="bg-[var(--color-three)] flex max-w-[12rem] rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s]">
              <span className="text-[1.125rem] font-medium">Shop Now</span>
              <FaArrowRightLong className="text-[1.125rem] font-bold"/>
          </Link>
        </div>
      </div>
      <div className="px-lr-custom flex gap-[2rem] pb-[5rem]">
        <div className="bg-[var(--color-five)] px-[2.5rem] py-[3rem] rounded-[1rem] flex flex-col gap-[1.5rem]" style={{flexBasis: 'calc(50% - 20px)'}}>
          <h1 className="text-[2rem] font-bold text-[var(--color-two)]">Our Mission</h1>
          <span className="text-[var(--color-four)] text-[1.0625rem]">Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat.</span>
        </div>
        <div className="bg-[var(--color-five)] px-[2.5rem] py-[3rem] rounded-[1rem] flex flex-col gap-[1.5rem]" style={{flexBasis: 'calc(50% - 20px)'}}>
          <h1 className="text-[2rem] font-bold text-[var(--color-two)]">Our Vision</h1>
          <span className="text-[var(--color-four)] text-[1.0625rem]">Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat.</span>
        </div>
      </div>
      <div className="h-[16.25rem] bg-[var(--color-three)] bg-[url('/home/home-background.svg')] px-lr-custom flex items-center">
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <TbTruckDelivery className="text-[var(--color-black)] text-[2.5rem]"/>
          </div>
          <div>
            <h1 className="text-[var(--color-white)] text-[1.5625rem] font-bold text-center">Free Delivery</h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">Enjoy complimentary shipping on all orders over Ksh. 5,000.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <TbClock24 className="text-[var(--color-black)] text-[2.5rem]"/>
          </div>
          <div>
            <h1 className="text-[var(--color-white)] text-[1.5625rem] font-bold text-center">24/07 Support</h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">Our dedicated support team is available 24/7 to assist you.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] items-center [flex-basis:33.33%]">
          <div className="flex items-center justify-center outline-dashed outline-[var(--color-white)] outline-[1px] outline-offset-[0.5rem] bg-[var(--color-white)] rounded-[50%] w-[5rem] h-[5rem]">
            <RiMoneyDollarCircleLine className="text-[var(--color-black)] text-[2.5rem]"/>
          </div>
          <div>
            <h1 className="text-[var(--color-white)] text-[1.5625rem] font-bold text-center"> Secure Payment</h1>
            <p className="text-[var(--color-white)] text-[1.0625rem] text-center">Rest assured with our secure payment system, ensuring your transactions are safe</p>
          </div>
        </div>
      </div>
      <div className="py-[7.5rem] bg-[linear-gradient(#fff5ed,_#fff)] px-lr-custom">
        <div className="text-center">
          <span className="text-[var(--color-three)] font-medium text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">TEAM MEMBERS</span>
        </div>
        <div className="text-center mt-[2rem]">
          <h1 className="text-[3rem] text-[var(--color-two)] font-bold">Our Expert Chef</h1>
        </div>
        <div className="flex gap-[1.5rem] my-[5rem]">
          {chefs.map((chef: People) =>(
            <div key={chef.id} className="h-[22.875rem] shadow-sm rounded-[0.5rem] bg-[var(--color-white)] p-[1rem] text-center" style={{flexBasis: 'calc(25% - 10px)'}}>
              <div className="h-[14.125rem] bg-center bg-cover rounded-[0.5rem]" style={{backgroundImage: `url(${chef.image})`}}></div>
              <h1 className="text-[1.25rem] text-[var(--color-two)] font-semibold mt-[2.5rem]">{chef.name}</h1>
              <p className="text-[var(--color-four)]">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
