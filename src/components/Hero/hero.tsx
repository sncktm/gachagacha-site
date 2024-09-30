import Image from "next/image";
import styles from "./hero.module.css";

type Props = {
  title: string;
};

export default function Hero({ title }: Props) {
  return (
    <div className={styles.top}>
      <Image
        className={styles.image}
        src="/images/gacha2.jpg"
        width={800} // 幅を小さく指定
        height={200} // 高さを小さく指定
        alt={title}
        layout="intrinsic" // 画像のサイズを明示的に指定
        objectFit="cover" // 画像の表示を親要素に合わせて調整
      />
      <h2 className={styles.h}>{title}</h2>
    </div>
  );
}
