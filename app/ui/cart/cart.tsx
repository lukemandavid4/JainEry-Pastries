import { IoClose } from "react-icons/io5";

const Cart = () => {
  return (
    <main className="fixed bg-white right-0 top-0 w-[30rem] h-full p-6">
      <div className="flex">
        <h1 className="text-[1.4375rem] font-bold text-[var(--color-two)]">
          Your Cart
        </h1>
        <IoClose />
      </div>
    </main>
  );
};

export default Cart;
