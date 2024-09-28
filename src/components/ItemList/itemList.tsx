import styles from "./itemList.module.css";
import Image from "next/image";

export default function ItemList(props) {
  return (
    <ul>
      {props.map((item) => {
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
  );
}
