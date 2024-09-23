import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Menu from "../Menu/menu";

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
      <Menu />
    </header>
  );
}
