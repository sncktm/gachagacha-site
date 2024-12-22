import Image from "next/image";
import styles from "./collection.module.css";

export default function Collection() {
  type Collection = {
    id: number;
    title: string;
    text: string;
    image: string;
  };

  const collections: Collection[] = [
    {
      id: 1,
      title: "見返して楽しい",
      text: "ガチャガチャに必ずついてくる説明書は、一枚ずつファイリングしています。",
      image: "/images/collection1.png",
    },
    {
      id: 2,
      title: "コンパクトに収納",
      text: "鞄につけたり、飾ったりしないガチャガチャは、小分けにして収納しています。",
      image: "/images/collection2.png",
    },
    {
      id: 3,
      title: "収納だけじゃない",
      text: "お気に入りのフィギュアは、重ねられるケースに入れて飾っています。",
      image: "/images/collection3.png",
    },
  ];

  return (
    <>
      <div className={styles.nami} />
      <section className={styles.sec3}>
        <h3 className={styles.title}>COLLECTION</h3>
        <div className={styles.collections}>
          {collections.map((collection) => (
            <div
              key={collection.id}
              className={`${styles.collection} ${
                collection.id % 2 === 0 ? styles.reverse : ""
              }`}
            >
              <Image
                className={styles.image}
                src={collection.image}
                width={500}
                height={300}
                alt={collection.title}
              />
              <div
                className={`${styles.text} ${
                  collection.id % 2 ? styles.textLeft : styles.textRight
                }`}
              >
                <h4>{collection.title}</h4>
                <p>{collection.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
