import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Burger from "../Burger/burger";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/"
          alt="logo"
          className={styles.logo}
          width={348}
          height={133}
        />
      </Link>
      <Burger />
    </header>
  );
}
