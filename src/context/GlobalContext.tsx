import { createContext, useState, type ReactElement } from "react";

export type productType = {
  id: number;
  title: string;
  price: number;
  image_src: string;  
}

export const CartContext = createContext<{cart: productType[], setCart: (value: any) => void}| null>(null)
export default function GlobalContext({children}: {children: ReactElement}){
  const [cart, setCart] = useState([]);

  return(
    <CartContext.Provider value={{cart, setCart}} >
      {children}
    </CartContext.Provider>
  )
}