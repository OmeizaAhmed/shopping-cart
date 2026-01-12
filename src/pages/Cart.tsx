import { useContext } from "react";
import { CartContext } from "../context/GlobalContext";
import { NavLink } from "react-router-dom";
import CartTile from "../components/CartTile";
import type { productType } from "./Home";

export default function Cart() {
  const { cart }: any = useContext(CartContext);

  console.log(cart);

  return cart && cart.length ? (
    <div className="flex flex-col lg:flex-row justify-between w-9/10 lg:w-4/5 mx-auto">
      <div className="grid grid-cols-1 gap-5 w-4/5 mx-auto h-[75vh] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {cart.map((item: productType) => (
          <CartTile key={item.id} product={item} />
        ))}
      </div>
      <div className="flex flex-col gap-3 items-end">
        <h3 className="font-bold text-xl text-red-950 tracking-wide">Your Cart Summary</h3>
        <p><span className="font-bold">Total Item: </span>{cart.length}</p>
        <p className=""><span className="font-bold">Total amount: </span>${cart.reduce((acc:number, curr: productType) => acc + curr.price, 0).toFixed(2)}</p>
      </div>
    </div>
  ) : (
    <div className="w-fit mx-auto flex flex-col items-center mt-[30vh]">
      <p className="text-2xl font-bold">Your Cart is Empty</p>
      <NavLink
        to="/"
        className="px-4 py-2 rounded-md bg-red-950 text-white font-semibold inline-block mt-3"
      >
        go to store
      </NavLink>
    </div>
  );
}
