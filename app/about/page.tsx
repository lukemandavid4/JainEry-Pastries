import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className="h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[4.69rem] font-bold">About Us</h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link href='/' className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]">Home</Link>
          <span className="text-[var(--color-white)]">&#47;&#47;  about</span>
        </div>
      </div>
      <div className="py-[4rem] px-lr-custom flex gap-[1rem]">
        <div className="bg-[url('/about/baker.png')] h-[40rem] bg-center bg-cover" style={{flexBasis: 'calc(40% - 20px)'}}>
        </div>
        <div style={{flexBasis: 'calc(60% - 20px)'}}>
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">ABOUT US</span>
          </div>
          <div>
            <h1 className="text-[3rem] text-[var(--color-two)] font-semibold">We provide 100% halal bakery product.</h1>
          </div>
          <p className="text-[1.125rem] text-[var(--color-four)]">Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Erat velit scelerisque in dictum. Sit amet est placerat in.</p>
          <p className="text-[1.125rem] text-[var(--color-four)]">Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio.</p>
          <Link href='/shop' className="bg-[var(--color-three)] flex max-w-[12rem] rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s]">
              <span className="text-[1.125rem] font-medium">Shop Now</span>
              <FaArrowRightLong className="text-[1.125rem] font-bold"/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default page
