import Link from "next/link"
import Image from "next/image"

const notFound = () => {
  return (
    <div>
      <div className="min-h-[15rem] md:min-h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-[2rem] md:px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[2.25rem] md:text-[4.69rem] font-bold">404 Error</h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link href='/' className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]">Home</Link>
          <span className="text-[var(--color-white)]">&#47;&#47;  404</span>
        </div>
      </div>
      <div className="px-[2rem] md:px-lr-custom flex flex-col md:flex-row py-[4rem] md:py-[10rem]">
        <div className="flex flex-col gap-[1.5rem] [direction:ltr]" style={{flexBasis: 'calc(40% - 20px)'}}>
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">PAGE NOT FOUND</span>
          </div>
          <p className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] leading-normal font-bold md:leading-[3.5rem]">This is Awkward. We Can&apos;t Find That Page.</p>
          <p className="text-[1.125rem] text-[var(--color-four)]">Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices enim diam vulputate</p>
          <Link href='/' className="bg-[var(--color-three)] flex px-[2rem] rounded-[50vw] items-center justify-center gap-[1rem] py-[0.8rem] text-[var(--color-white)] hover:bg-[var(--color-two)] [transition:background_0.3s] text-[1.125rem] font-medium  self-start">Back to Home
          </Link>
        </div>
        <div style={{flexBasis: 'calc(60% - 20px)'}} className="items-center justify-center hidden md:flex">
          <Image src='/home/not-found.png' width={600} height={100} alt="image"></Image>
        </div>
      </div>
    </div>
  )
}

export default notFound
