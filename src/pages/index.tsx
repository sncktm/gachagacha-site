import styles from "../styles/index.module.css";
import { Spot } from "../components/Spot/spot";
import Aside from "../components/Aside/aside";
import Collection from "@/components/Collection/collection";
import Image from "next/image";

type Spot = {
  id: string;
  name: string;
  image: string;
  spotType: string;
};

type SliderImage = {
  id: string;
  image: string;
};

const spots: Spot[] = [
  {
    id: "1",
    name: "マンガ倉庫 鹿児島店",
    image: "",
    spotType: "city",
  },
  {
    id: "2",
    name: "センテラス天文館",
    image: "",
    spotType: "city",
  },
  {
    id: "3",
    name: "ビックカメラ鹿児島中央駅店",
    image: "",
    spotType: "city",
  },
  {
    id: "4",
    name: "アミュプラザ鹿児島",
    image: "",
    spotType: "city",
  },
  {
    id: "5",
    name: "イオンタウン姶良",
    image: "",
    spotType: "outside",
  },
  {
    id: "6",
    name: "サンキュー隼人店",
    image: "",
    spotType: "outside",
  },
];

export default function Home() {
  return (
    <div>
      <div className={styles.topDiv}>
        <div className={styles.top}>
          <Image
            className={styles.topImage}
            src="/images/top.png"
            width={1700}
            height={800}
            alt="TOP画像"
          />
          <h1 className={styles.topTitle}>GACHAGACHA</h1>
        </div>
      </div>

      {/* <Slider /> */}
      <div className="main">
        <article>
          <Spot spots={spots} />
          <Collection />
        </article>

        <aside>
          <Aside />
        </aside>
      </div>
    </div>
  );
}
