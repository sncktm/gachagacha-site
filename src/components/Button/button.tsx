import Link from "next/link";
import styles from "./button.module.css";

type Props = {
  name: string;
  title: string;
};

export default function Button(props: Props) {
  return (
    <Link className={styles.button} href={`/${props.name}`}>
      {props.title}
    </Link>
  );
}
