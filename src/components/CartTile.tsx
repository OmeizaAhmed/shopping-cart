import { useContext } from "react";
import { CartContext, type productType } from "../context/GlobalContext";

export default function CartTile({ product }: { product: productType }) {
  const { cart, setCart }: any = useContext(CartContext);
  function removeItemFromCart(cartId: number) {
    const copyCart = [...cart];
    const itemId = copyCart.findIndex(
      (item: { id: number }) => item.id === cartId
    );
    copyCart.splice(itemId, 1);
    setCart(copyCart);
  }
  return (
    <div className="flex bg-red-200 w-full lg:w-100 gap-5 rounded-2xl p-6 h-45">
      <img src={product.image_src} alt={product.title} className="w-15 lg:w-30"/>
      <div className="relative w-full flex flex-col justify-between">
        <h3 className="text-sm lg:text-xl font-semibold ">{product.title}</h3>
        <span className="lg:absolute lg:bottom-1 lg:right-1 text-md font-bold">${product.price}</span>
        <button onClick={() => removeItemFromCart(product.id)} className="bg-red-950 w-fit rounded-sm text-white font-semibold px-4 py-2">
          Remove
        </button>
      </div>
    </div>
  );
}
