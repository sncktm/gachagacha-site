import Image from "next/image";
import styles from "./spot.module.css";
import { useState } from "react";

type Spot = {
  id: string;
  name: string;
  image: string;
  spotType: string;
};
const spotArray: Spot[] = [
  {
    id: "1",
    name: "マンガ倉庫 鹿児島店",
    image: "/images/manga.png",
    spotType: "city",
  },
  {
    id: "2",
    name: "センテラス天文館",
    image: "/images/senterasu.png",
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
    image: "/images/amu.png",
    spotType: "city",
  },
  {
    id: "5",
    name: "イオンタウン姶良",
    image: "/images/aira.png",
    spotType: "outside",
  },
  {
    id: "6",
    name: "サンキュー隼人店",
    image: "",
    spotType: "outside",
  },
];

const defaultImage = "/images/noimage.jpg";

function Spot() {
  const spotTypes = Array.from(new Set(spotArray.map((spot) => spot.spotType)));
  const [selectedTab, setSelectedTab] = useState<string>(spotTypes[0]);
  const [spots, setSpots] = useState<Spot[]>(
    spotArray.filter(({ spotType }) => spotType === selectedTab)
  );
  const selectTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectSpotType = e.currentTarget.value;
    setSelectedTab(selectSpotType);
    const filteredSpots = spotArray.filter(
      ({ spotType }) => spotType === selectSpotType
    );
    setSpots(filteredSpots);
  };
  if (spots.length === 0) {
    return <p>SPOTがありません。</p>;
  }
  return (
    <section className={styles.sec2}>
      <ul className={styles.tab}>
        {spotTypes.map((spot) => (
          <button
            key={spot}
            className={selectedTab === spot ? styles.current : ""}
            value={spot}
            onClick={selectTab}
          >
            {spot}
          </button>
        ))}
      </ul>
      <div className={styles.sec2contents}>
        <div className={styles.sec2aside}>
          <h3 className={styles.title}>
            RECOMMENDATION
            <br />
            GACHAGACHA SPOT
          </h3>
        </div>
        <div className={styles.sec2article}>
          <div className={styles.spots}>
            {spots.map((spot) => (
              <div className={styles.spot} key={spot.id}>
                <h4>{spot.name}</h4>
                <Image
                  src={spot.image || defaultImage}
                  alt={spot.name}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Spot;
