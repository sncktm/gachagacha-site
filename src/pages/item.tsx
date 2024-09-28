import Hero from "../components/Hero/hero";
import Image from "next/image";
import styles from "../styles/item.module.css";
import { Item as ItemType } from "@/libs/microcms";
import { useEffect, useState } from "react";
export default function Item() {
  const [data, setData] = useState<ItemType[]>([]);
  useEffect(() => {
    const fetchItemList = async () => {
      const itemList = await fetch("http://localhost:3000/api/getContent")
        .then((res) => res.json())
        .then((res) => res.contents);
      console.log(itemList);
      setData(itemList);
    };
    fetchItemList();
  }, []);
  return (
    <div>
      <Hero title="ITEM" />
      <ul>
        {data.map((item) => {
          return (
            <li key={item.title}>
              <Image
                src={item.image.url}
                alt={item.title}
                width={300}
                height={200}
              ></Image>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <p>{item.releaseDate}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
