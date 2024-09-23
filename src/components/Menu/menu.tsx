"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./menu.module.css";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div
        className={styles.openBtn + (isActive ? ` ${styles.active}` : "")}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id="nav" className={isActive ? styles.panelActive : ""}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              TOP
            </Link>
          </li>
          <li>
            <Link href="/items" onClick={closeMenu}>
              ITEM
            </Link>
          </li>
          <li>
            <Link href="/form" onClick={closeMenu}>
              FORM
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={
          styles.circleBg + (isActive ? ` ${styles.circleActive}` : "")
        }
      ></div>
    </div>
  );
}
