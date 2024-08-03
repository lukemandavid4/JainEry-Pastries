import Link from "next/link";
import Form from "../ui/form/form";

const page = () => {
  return (
    <>
      <div className="min-h-[15rem] md:min-h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-[2rem] md:px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[2.25rem] md:text-[4.69rem] font-bold">
          Contact Us
        </h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link
            href="/"
            className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]"
          >
            Home
          </Link>
          <span className="text-[var(--color-white)]">
            &#47;&#47; Contact Us
          </span>
        </div>
      </div>
      <div className="px-[2rem] xl:px-lr-custom py-[6rem] flex flex-col md:flex-row gap-[2rem]">
        <div style={{ flexBasis: "calc(40% - 10px)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31913.268069306443!2d37.0802688!3d-1.0420224000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1718194243445!5m2!1sen!2ske"
            style={{ border: 0 }}
            className="w-[100%] md:w-[400px] min-h-[400px] md:min-h-[600px] rounded-[0.5rem]"
          ></iframe>
        </div>
        <div
          className="flex flex-col gap-[2.5rem]"
          style={{ flexBasis: "calc(60% - 10px)" }}
        >
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">
              CONTACT US
            </span>
          </div>
          <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] leading-normal font-bold md:leading-[3.5rem]">
            How can we help you?
          </h1>
          <Form />
        </div>
      </div>
    </>
  );
};

export default page;
