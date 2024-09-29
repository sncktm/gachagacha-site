import styles from "../styles/index.module.css";
import Spot from "../components/Spot/spot";
import Aside from "../components/Aside/aside";
import Collection from "@/components/Collection/collection";
import Image from "next/image";

type SliderImage = {
  id: string;
  image: string;
};

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

      {/* <Slider /> */}
      <div className="main">
        <article>
          <Spot />
          <Collection />
        </article>
      </div>
    </div>
  );
}
