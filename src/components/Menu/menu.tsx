"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./menu.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul>
          <li>
            <Link href="/">TOP</Link>
          </li>
          <li>
            <Link href="/item">ITEM</Link>
          </li>
          <li>
            <Link href="/form">FORM</Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)}>
          <Image
            src="/images/closeMenu.png"
            alt="close"
            width={30}
            height={30}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/images/openMenu.png" alt="open" width={30} height={30} />
      </button>
    </div>
  );
}
