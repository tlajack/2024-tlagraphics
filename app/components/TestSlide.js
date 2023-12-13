"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./TestSlide.module.css";

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
            src="/images/homepage/LG-03.jpg"
            alt="dimensional sign"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Dimensional Sign</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/dosequis-04.jpg"
            alt="Dos Equis wall sign"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Backlit display</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/nobleStratford.jpg"
            alt="Backlit Custom Logo"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Backlit Custom Signage</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/acrylicisplay-01.jpg"
            alt="Custom Acrylic Display"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Acrylic Display</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/displayCase-01.png"
            alt="Display Case"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Display Case</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/beerCart-01-sq.jpg"
            alt="Beer Cart"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Vinyl Wrap</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/DSC_7362.jpg"
            alt="Car Wrap"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Vehicle Vinyl Wrap</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/Nike-Yorkdale-IMG_7346-sq.jpg"
            alt="Nike Store, Yorkdale - Ontario"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Storefront Window Graphics</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/CanadaGoose-01-1200x800-sq.jpg"
            alt="Canada Goose - Henry Poole display"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Custom Merchandise Display</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/tla-presentation14-sq.jpg"
            alt="Frost panels "
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Decorative Frost Vinyl</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/IMG_6530-sq.jpg"
            alt="Dentistry on 88 - reception logo"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.slideImage}
          />
          <div className={styles.label}>Reception Logo</div>
        </div>
        <div className={styles.embla__slide}>
          <Image
            src="/images/homepage/DSC_4045.jpg"
            alt="Vehicle Wrap"
            width={200}
            height={150}
            quality={50}
            sizes="100vw"
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
