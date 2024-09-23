import Image from "next/image";
import styles from "./hero.module.css";

type Props = {
  title: string;
};

export default function Hero({ title }: Props) {
  return (
    <div className="div28">
      <ul className="slide28">
        <li>
          <Image src="/images/gacha2.jpg" width={1300} height={300} alt="" />
        </li>
        <li>
          <Image src="/images/gacha3.jpg" width={1300} height={300} alt="" />
        </li>
      </ul>
      <h2>{title}</h2>
    </div>
  );
}
