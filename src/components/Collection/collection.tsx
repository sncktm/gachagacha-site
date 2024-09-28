import Image from "next/image";
import styles from "./collection.module.css";

export default function Collection() {
  type Collection = {
    id: string;
    title: string;
    text: string;
    image: string;
  };

  const collections: Collection[] = [
    {
      id: "1",
      title: "見返して楽しい",
      text: "ガチャガチャに必ずついてくる説明書は、一枚ずつファイリングしています。",
      image: "/images/collection1.png",
    },
    {
      id: "2",
      title: "コンパクトに収納",
      text: "鞄につけたり、飾ったりしないガチャガチャは、小分けにして収納しています。",
      image: "/images/collection2.png",
    },
    {
      id: "3",
      title: "収納だけじゃない",
      text: "お気に入りのフィギュアは、重ねられるケースに入れて飾っています。",
      image: "/images/collection3.png",
    },
  ];

  return (
    <section id="sec3">
      <h3>COLLECTION</h3>
      <div className="collection">
        <dl>
          {collections.map((collection) => (
            <div key={collection.id}>
              <dt>
                <a
                  href={"#acc" + collection.id}
                  className={collection.id === "1" ? "currentBtn" : ""}
                >
                  {collection.id}
                </a>
              </dt>
              <dd id={"acc" + collection.id} className="current3">
                <Image
                  src={collection.image}
                  width={500}
                  height={400}
                  alt={collection.title}
                />
                <div className="text">
                  <h4>{collection.title}</h4>
                  <p>{collection.text}</p>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
