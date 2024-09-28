import Image from "next/image";
import styles from "./hero.module.css";

type Props = {
  title: string;
};

export default function Hero({ title }: Props) {
  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <Image
          className={styles.image}
          src="/images/gacha2.jpg"
          width={1300}
          height={300}
          alt={title}
        />
        <h2 className={styles.h}>{title}</h2>
      </div>
    </div>
  );
}
