"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./TestSlide.module.css";
import img_lg from "../images/homepage/LG-03.jpg";
import img_dos from "../images/homepage/dosequis-04.jpg";
import img_noble from "../images/homepage/nobleStratford.jpg";
import img_display1 from "../images/homepage/acrylicisplay-01.jpg";
import img_display2 from "../images/homepage/displayCase-01.jpg";
import img_beercart from "../images/homepage/beerCart-01-sq.jpg";
import img_tesla from "../images/homepage/DSC_7362.jpg";
import img_nike from "../images/homepage/Nike-Yorkdale-IMG_7346-sq.jpg";
import img_canadag from "../images/homepage/CanadaGoose-01-1200x800-sq.jpg";
import img_frost from "../images/homepage/tla-presentation14-sq.jpg";
import img_dentistry from "../images/homepage/IMG_6530-sq.jpg";
import img_trailer from "../images/homepage/DSC_4045.jpg";

function TestSlide() {
  const autoplayOptions = {
    delay: 6000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Image
            src={img_lg}
            alt="dimensional sign"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Dimensional Sign</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_dos}
            alt="Dos Equis wall sign"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Backlit display</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_noble}
            alt="Backlit Custom Logo"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Backlit Custom Signage</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_display1}
            alt="Custom Acrylic Display"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Acrylic Display</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_display2}
            alt="Display Case"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Display Case</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_beercart}
            alt="Beer Cart"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Vinyl Wrap</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_tesla}
            alt="Car Wrap"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Vehicle Vinyl Wrap</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_nike}
            alt="Nike Store, Yorkdale - Ontario"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Storefront Window Graphics</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_canadag}
            alt="Canada Goose - Henry Poole display"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Merchandise Display</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_frost}
            alt="Frost panels "
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Decorative Frost Vinyl</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_dentistry}
            alt="Dentistry on 88 - reception logo"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Reception Logo</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={img_trailer}
            alt="Vehicle Wrap"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Vehicle Vinyl Wrap</div>
        </div>
      </div>
    </div>
  );
}

export default TestSlide;
