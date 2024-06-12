import Link from "next/link"
import { products, Products } from "../ui/data/data";

const page = () => {
  return (
    <>
      <div className="h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[4.69rem] font-bold">Blog Post</h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link href='/' className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]">Home</Link>
          <span className="text-[var(--color-white)]">&#47;&#47;  Blog</span>
        </div>
      </div>
      <div className="bg-[linear-gradient(#fff,_#fff5ed)] px-lr-custom py-[7.5rem]">
        <div className="text-center">
          <span className="text-[var(--color-three)] font-medium text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">LATEST BLOG POST</span>
        </div>
        <div className="text-center mt-[2rem]">
          <h1 className="text-[3rem] text-[var(--color-two)] font-bold">Latest News & Article</h1>
        </div>
        <div className="mt-[5rem] flex flex-wrap gap-[1.5rem]">
          {products.map((product: Products) =>(
            <div key={product.id} className="h-[32rem] p-[1.5rem] bg-[linear-gradient(#fff5ed,_#f9e3d0)] shadow-md rounded-[0.5rem] flex flex-col gap-[1rem] box-border" style={{flexBasis: 'calc(33.33% - 20px)'}}>
              <div className="bg-center bg-cover w-[100%] h-[15rem] rounded-[0.5rem]" style={{ backgroundImage: `url(${product.background})` }}></div>
              <h1 className="text-[var(--color-three)] font-semibold mt-[1rem]">{product.date}</h1>
              <p className="text-[1.4rem] text-[var(--color-one)] font-semibold">{product.content}</p>
              <div className="mt-[1rem]">
                <Link href='' className="text-[var(--color-one)] text-[0.9rem] font-medium border-[var(--color-three)] border-[2px] border-solid px-[2rem] py-[0.8rem] rounded-[0.3rem] hover:text-[var(--color-white)] hover:bg-[var(--color-three)] [transition:background_0.3s,_color_0.3s]">READ MORE</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
