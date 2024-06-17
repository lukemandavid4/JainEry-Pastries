'use client'
import Link from "next/link"
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(Array(7).fill(false));
  const handleClick = (index: number) => {
    setOpen(open.map((open, i) => (i === index ? !open : open)));
  }
  interface faq {
    id: number;
    question: string;
    answer: string;
  }
  const faqData: faq[] = [
    {
      id: 1,
      question: "What are some popular types of breads found in bakeries?",
      answer: "The article discusses the most popular types of bread found in bakeries around the world, including sourdough, baguette, ciabatta, and rye bread. It also explores the history and characteristics of each type of bread, as well as suggestions for how to enjoy them."
    },
    {
      id: 2,
      question: "What is the difference between a cake and a torte?",
      answer: "The difference between a cake and a torte, explaining that while both desserts are made with flour, sugar, and eggs, tortes are typically denser and richer due to the addition of ground nuts or breadcrumbs in the batter. The article also discusses the variations in ingredients and preparation methods between cakes and tortes, providing examples of each."
    },
    {
      id: 3,
      question: "What are some common ingredients used in making cookies?",
      answer: "Some of the most common ingredients used in making cookies, such as flour, sugar, butter, eggs, and baking powder or soda. It also briefly discusses the role of each ingredient in creating the desired texture, flavor, and appearance of cookies, and provides tips for how to properly measure and mix the ingredients."
    },
    {
      id: 4,
      question: "What is the origin of the bagel and how is it traditionally served?",
      answer: "The bagel is believed to have originated in Poland in the early 17th century. It was traditionally a breakfast food for Jewish communities and was served with cream cheese, lox, or butter. Today, bagels are a popular type of bread that can be enjoyed at any time of day and are often served with a variety of toppings, such as smoked salmon, cream cheese, jam, or avocado. They are typically boiled and then baked to create their distinct chewy texture and golden brown exterior."
    },
    {
      id: 5,
      question: "What are some popular types of pastries found in bakeries?",
      answer: "There are many popular types of pastries that can be found in bakeries, including croissants, danishes, éclairs, macarons, tarts, and turnovers. Croissants are flaky, buttery pastries that are often filled with chocolate or almond paste. Danishes are a type of sweet pastry that can be filled with fruit, cheese, or custard. Éclairs are cream-filled pastries that are often topped with chocolate ganache. Macarons are delicate, colorful French cookies made from almond flour and filled with buttercream or ganache. Tarts are open-faced pastries that can be filled with fruit, custard, or chocolate. Turnovers are a type of hand-held pastry that can be filled with sweet or savory ingredients, such as fruit, cheese, or meat."
    },
    {
      id: 6,
      question: "How do you make a flaky pie crust?",
      answer: "To make a flaky pie crust, start by combining flour, salt, and sugar in a mixing bowl. Cut in cold butter and/or shortening until the mixture forms pea-sized pieces. Gradually add ice water and stir until the dough just comes together. Chill the dough in the refrigerator for at least 30 minutes before rolling it out on a floured surface. Fold the dough over and roll it out again several times to create layers, then transfer it to a pie dish and fill with desired filling before baking."
    },
    {
      id: 7,
      question: "What are some common types of cakes found in bakeries?",
      answer: "Cakes are a popular bakery item with various types available, including chocolate, vanilla, red velvet, carrot, lemon, pound, and angel food cake. Each has its own unique flavor and texture, and may be topped with frosting or glaze."
    }
  ]
  return (
    <>
       <div className="min-h-[15rem] md:min-h-[27.25rem] bg-[url('/about/background-jainery.png')] bg-[var(--color-five)] bg-cover px-[2rem] md:px-lr-custom flex items-center justify-center relative">
        <h1 className="text-[var(--color-two)] text-[2.25rem] md:text-[4.69rem] font-bold">FAQ</h1>
        <div className="flex px-[1rem] py-[0.5rem] bg-[var(--color-three)] rounded-[50vw] gap-[0.4rem] font-medium absolute bottom-[-1rem]">
          <Link href='/' className="hover:text-[var(--color-two)] text-[var(--color-white)] [transition:color_0.3s]">Home</Link>
          <span className="text-[var(--color-white)]">&#47;&#47;  FAQ</span>
        </div>
      </div>
      <div className="px-[2rem] md:px-lr-custom py-[6rem] flex flex-col md:flex-row gap-[2rem]">
        <div className="flex flex-col gap-[1rem]" style={{flexBasis: 'calc(60% - 10px)'}}>
          <div>
            <span className="text-[var(--color-three)] font-medium text-[0.8rem] md:text-[0.9rem] tracking-[2px] px-[1rem] py-[0.5rem] bg-[var(--color-white)] rounded-[50vw] shadow-md">FAQ</span>
          </div>
          <h1 className="text-[1.75rem] md:text-[3rem] text-[var(--color-two)] leading-normal font-bold md:leading-[3.5rem] mb-[1rem]">Frequently Asked Questions</h1>
          <div className="w-full">
              {faqData.map((data: faq, index) => (
                <div key={data.id} className="w-full md:w-[90%]">
                  <div className="flex items-center justify-between cursor-pointer text-[1.1875rem] font-semibold text-[var(--color-two)] border-b-[1px] border-solid border-[var(--color-five)]" onClick={() => handleClick(index)}>
                    <p className="py-[1rem] border-b-[1px_solid_var(--color-five)]">{data.question}</p>
                    <span className={`${open[index] ? 'rotate-180' : 'rotate-0'}`}><IoIosArrowDown /></span>
                  </div>
                  <div className={`text-[1.0625rem] text-[var(--color-four)] [transition:height_0.3s] ${open[index] ? 'py-[1rem] max-h-[40rem] opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
                    <p>{data.answer}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="h-fit bg-[var(--color-five)] py-[3rem] hidden md:flex justify-end rounded-xl" style={{flexBasis: 'calc(40% - 10px)'}}>
          <Image src='/faq/faq-image.png' width={450} height={100} alt="image"></Image>
        </div> 
      </div>
    </>
  )
}

export default Page
