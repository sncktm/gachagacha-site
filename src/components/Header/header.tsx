import styles from "./header.module.css";
import Burger from "../Burger/burger";

export default function Header() {
  return (
    <header className={styles.header}>
      <Burger />
    </header>
  );
}
