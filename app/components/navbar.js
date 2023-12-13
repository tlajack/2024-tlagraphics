import Link from "next/link";
import Image from "next/image";
import tlaLogo from "@/public/tla-icon.svg";
import styles from "./navbar.module.css";

function navbar() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.tlalogo}
          src={tlaLogo}
          alt="tla logo"
          priority
        />
      </Link>
      <nav className={styles.navlist}>
        <ul>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default navbar;
