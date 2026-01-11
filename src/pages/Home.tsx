import { useEffect, useState } from "react";

type storeDataType = {
  id: number;
  title: string;
  price: number;
  category: { image: string };
};

export default function Home() {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchStoreData() {
    try {
      setLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!res.ok) {
        throw new Error(`Error fetching Data: ${res.status} status code`);
      }
      const data = await res.json();
      const neededData = data.map((data: storeDataType) => ({
        id: data.id,
        title: data.title,
        price: data.price,
        image_src: data.category.image,
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


