import styles from "../styles/index.module.css";
import Spot from "../components/Spot/spot";
import Slider from "../components/Slider/slider";
import Collection from "@/components/Collection/collection";
import Image from "next/image";
import Button from "@/components/Button/button";

export default function Home() {
  return (
    <div>
      <div className={styles.topDiv}>
        <div className={styles.top}>
          <Image
            className={styles.topImage}
            src="/images/top.png"
            width={1500}
            height={450}
            alt="TOP画像"
          />
          <h1 className={styles.topTitle}>GACHAGACHA</h1>
        </div>
      </div>

      <Slider />
      <Button name="item" title="more" />
      <div className="main">
        <article>
          <Spot />
          <Collection />
        </article>
      </div>
    </div>
  );
}
