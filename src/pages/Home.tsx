import { useEffect, useState } from "react";

type storeDataType = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function Home() {
  const [storeData, setStoreData] = useState([]);
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
      const neededData = products.map((data: storeDataType) => ({
        id: data.id,
        title: data.title,
        price: data.price,
        image_src: data.thumbnail,
      }));
      console.log(neededData);
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

  if (loading) return <div>Loading... Please wait</div>;
  if (error) return <div>{error}</div>;
  return <div>This is the Home page</div>;
}
