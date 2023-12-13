import Image from "next/image";
import styles from "./page.module.css";
import TestSlide from "./components/TestSlide";

export default function Home() {
  return (
    <div>
      <TestSlide />
    </div>
  );
}
