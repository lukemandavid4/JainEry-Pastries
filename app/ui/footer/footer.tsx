import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";

export const Footer = () => {
  return (
    <div className="bg-[url('/home/footer.svg')] bg-center bg-cover md:min-h-[15.375rem] px-[2rem] md:px-lr-custom flex flex-col gap-[2rem] md:gap-0 md:flex-row md:items-center md:justify-between py-[5rem] md:py-0">
      <div className="flex gap-[2rem]">
        <div className="p-[1.5rem] bg-[var(--color-white)] rounded-[50%] flex items-center justify-center outline-[var(--color-white)] outline-[1px] outline-dashed outline-offset-[0.5rem] self-center">
          <LuPhoneCall className="text-[1.8rem]" />
        </div>
        <div className="flex flex-col text-[var(--color-white)] font-medium">
          <h1 className="text-[var(--color-white)] text-[1.56rem] font-bold mb-[0.7rem]">
            Call Us:
          </h1>
          <span>+254 700577740</span>
          <span>+254 714292320</span>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <div className="p-[1.5rem] bg-[var(--color-white)] rounded-[50%] flex items-center justify-center outline-[var(--color-white)] outline-[1px] outline-dashed outline-offset-[0.5rem] self-center">
          <TfiEmail className="text-[1.8rem]" />
        </div>
        <div className="flex flex-col text-[var(--color-white)] font-medium">
          <h1 className="text-[var(--color-white)] text-[1.56rem] font-bold mb-[0.7rem] ">
            Email Now:
          </h1>
          <span>lukemandavid@gmail.com</span>
          <span>dmwangi595@gmail.com</span>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <div className="p-[1.5rem] bg-[var(--color-white)] rounded-[50%] flex items-center justify-center outline-[var(--color-white)] outline-[1px] outline-dashed outline-offset-[0.5rem] self-center">
          <SlLocationPin className="text-[1.8rem]" />
        </div>
        <div className="flex flex-col text-[var(--color-white)] font-medium">
          <h1 className="text-[var(--color-white)] text-[1.56rem] font-bold mb-[0.7rem]">
            Our Location:
          </h1>
          <span>Nairobi city, Nairobi</span>
          <span>Thika, Kiambu</span>
        </div>
      </div>
    </div>
  );
};
