import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Circles } from "react-loader-spinner";

export type storeDataType = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export type productType = {
  id: number;
  title: string;
  price: number;
  image_src: string;  
}

export default function Home() {
  const [storeData, setStoreData] = useState<productType[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchStoreData() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error(`Error fetching Data: ${res.status} status code`);
      }
      const { products } = await res.json();
      const neededData: productType[] = products.map((data: storeDataType) => ({
        id: data.id,
        title: data.title,
        price: data.price,
        image_src: data.thumbnail,
      }));
      setStoreData(neededData);
      console.log(neededData)
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  }

  useEffect(() => {
    fetchStoreData();
  }, []);

  if (loading) return <div className="w-fit mx-auto mt-20"><Circles height={80} width={80} color="pink"/></div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">{storeData ? storeData.map((product: productType) =>(
      <ProductCard product={product} key={product.id}/>
    )):null}</div>
  )
}
