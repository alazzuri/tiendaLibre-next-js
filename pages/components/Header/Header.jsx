import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div>
      <figure>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </figure>
      <div className={styles.appName}>
        <p>tienda</p>
        <p>libre</p>
      </div>
    </div>
    <div className={styles.navbar}>
      <Link href="./"> Productos destacados</Link>
      <Link href="./tycs"> Tèrminos y condiciones </Link>
    </div>
  </header>
);

export default Header;
