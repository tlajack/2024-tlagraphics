import Link from "next/link";
import Image from "next/image";
import tlaLogo from "@/public/tla-logo-horizontal.svg";
import styles from "./navbar.module.css";

function navbar() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.tlalogo}
          src={tlaLogo}
          alt="tla logo"
          title="TLA Graphics"
          priority
        />
      </Link>
      <nav className={styles.navlist}>
        <ul>
          <li className={styles.item}>
            <Link href="/" title="home">
              home
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="about" title="about">
              about
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="contact" title="contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default navbar;
