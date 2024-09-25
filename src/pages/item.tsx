import Hero from "../components/Hero/hero";
import Image from "next/image";
import { getItemList } from "@/libs/microcms";

export default async function Item() {
  const data = await getItemList();

  return (
    <div>
      {/* <Hero /> */}
      <ul>
        {data.contents.map((item) => {
          return (
            <li key={item.id}>
              <Image src={item.image.url} alt={item.title}></Image>
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
