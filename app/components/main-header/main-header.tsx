"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg.src} width="64" height="64" alt="" priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link
              href="/meals"
              className={path.startsWith("/meals") ? styles.active : ""}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={path === "/community" ? styles.active : ""}
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
