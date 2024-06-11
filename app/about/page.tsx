import Link from "next/link"
const page = () => {
  return (
    <div className="h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-lr-custom flex items-center justify-center relative">
      <h1 className="text-[var(--color-two)] text-[4.69rem] font-bold">About Us</h1>
      <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] text-[var(--color-white)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
        <Link href='/' className="hover:text[var(--color-two)]">Home </Link>
        <span>&#47;&#47;  about</span>
      </div>
    </div>
  )
}

export default page
