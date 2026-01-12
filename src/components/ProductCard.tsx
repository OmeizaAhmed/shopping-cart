import { useContext } from "react";
import type { productType } from "../pages/Home";
import { CartContext } from "../context/GlobalContext";
export default function ProductCard({ product }: { product: productType }) {
  const { cart, setCart }: any = useContext(CartContext);

  function handleUpdateCart(product: productType) {
    const cpyCart = [...cart];
    const productIndex = cpyCart.findIndex(
      (item: { id: number }) => item.id === product.id
    );
    if (productIndex !== -1) {
      cpyCart.splice(productIndex, 1);
    } else {
      cpyCart.push(product);
    }
    setCart(cpyCart);
  }

  return (
    <div className="flex flex-col gap-2.5 px-5 py-4 border-2 rounded-lg border-red-950 h-90 justify-center">
      <div className="w-full h-60">
      <img src={product.image_src} alt={product.title} className="w-full" />
      </div>
      <h2 className="text-lg font-semibold truncate text-center">
        {product.title}
      </h2>
      <button
        onClick={() => handleUpdateCart(product)}
        className="bg-red-950 px-3 py-1.5 rounded-md w-fit mx-auto text-white text-md font-semibold"
      >
        {cart.findIndex((item: { id: number }) => item.id === product.id) === -1
          ? "Add to Cart"
          : "Remove from Cart"}
      </button>
    </div>
  );
}
