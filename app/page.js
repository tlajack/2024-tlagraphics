"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import TestSlide from "./components/TestSlide";
import img_dent from "./images/homepage/dentistry-01-IMG_6525.jpg";
import img_desk from "./images/homepage/palmieri-navigate-infoDesk.jpg";
import img_store from "./images/homepage/IMG_7353-hd.jpg";
import img_decals from "./images/homepage/decals.jpg";
import img_philips from "./images/homepage/shield-clear-high-1000.jpg";
import img_boardroom from "./images/homepage/benjamin-child-0sT9YhNgSEs-unsplash.jpg";
import img_wallgraphics from "./images/homepage/wallgraphics.jpg";
import img_frost from "./images/homepage/frosted-film.jpg";
import img_reception from "./images/homepage/reception-01.jpg";
import img_exit from "./images/homepage/exit.jpg";
import img_safety from "./images/homepage/safetySignage.png";
import img_ladder from "./images/homepage/tlaBuilding.jpg";

export default function Home() {
  return (
    <div>
      <GoogleAnalytics trackPageViews />
      <TestSlide />

      {/* <!-- Visual Merch SECTION --> */}
      <div
        className={styles.row + " " + styles.merch_row}
        id="merchandisingSection"
      >
        <h2
          className={
            styles.h2 +
            " " +
            styles.sectionTitle +
            " " +
            styles.sectionTitleExtraSpc
          }
        >
          VISUAL MERCHANDISING
        </h2>
        <div className={styles.gridItemsContainer} id="merch">
          <div className={styles.gridItems}>
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_dent}
              alt="Selection of signs"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>New Construction – Dental</h3>
              <ul className={styles.ul}>
                <li>Dental office wall art </li>
                <li>Dental office decals</li>
                <li>Dental window graphics</li>
                <li>Dental signage</li>
              </ul>
            </div>
          </div>
          <div className={styles.gridItems}>
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_desk}
              alt="Manufacturing Custom Graphics"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>MANUFACTURING PARTNERSHIPS</h3>
              <ul className={styles.ul}>
                <li>Furnishings</li>
                <li>Furniture</li>
                <li>Lectern Logos</li>
                <li>Custom podium decals</li>
                <li>Podium signs</li>
                <li>Reusable / detachable / removeable podium signs</li>
              </ul>
            </div>
          </div>

          <div className={styles.gridItems}>
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_store}
              alt="Store front sample graphics"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Retail POP</h3>
              <ul className={styles.ul}>
                <li>POP Signage and graphics</li>
                <li>POP displays</li>
                <li>Point of sale display ideas </li>
                <li>Point of purchase examples </li>
                <li>Types of POP material / POP material examples</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Marketing Collateral SECTION --> */}
      <div
        className={styles.row + " " + styles.marketing_row}
        id="marketingSection"
      >
        <h2
          className={
            styles.h2 +
            " " +
            styles.sectionTitle +
            " " +
            styles.sectionTitleExtraSpc
          }
        >
          MARKETING COLLATERAL
        </h2>
        <div className={styles.gridItemsContainer} id="marketing">
          <div className={styles.gridItems} id="cat">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_decals}
              alt="industrial decals"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Print production</h3>
              <ul className={styles.ul}>
                <li>Catalogue design and print services</li>
                <li>Catalogues, brochures, decals, posters, tags, coupons</li>
                <li>Industrial decals</li>
              </ul>
            </div>
          </div>

          <div className={styles.gridItems} id="customizedbBranding">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_philips}
              alt="Philips logo reception sign"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Customized Branding</h3>
              <ul className={styles.ul}>
                <li>Internal Corporate Branding</li>
                <li>Company logo design</li>
                <li>Custom award design and fabrication</li>
                <li>Custom corporate awards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Decorative SECTION --> */}
      <div className={styles.row + " " + styles.decorative_row}>
        <h2
          className={
            styles.h2 +
            " " +
            styles.sectionTitle +
            " " +
            styles.sectionTitleExtraSpc
          }
        >
          DECORATIVE GRAPHIC FILMS / ACCENT GRAPHICS
        </h2>
        <div className={styles.gridItemsContainer} id="decorative">
          <div className={styles.gridItems} id="arc">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_boardroom}
              alt="boardroom frosted film"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Architectural Frosting</h3>
              <ul className={styles.ul}>
                <li>Decorative glass finishes</li>
                <li>Architectural window film</li>
                <li>Architectural film</li>
                <li>Office glass design</li>
                <li>Office glass door design </li>
                <li>Frosted glass door design</li>
              </ul>
            </div>
          </div>
          <div className={styles.gridItems} id="decw">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_wallgraphics}
              alt="Large wall graphics"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>
                Decorative Graphics / Wall Graphics Decoration
              </h3>
              <ul className={styles.ul}>
                <li>Custom wall graphics</li>
                <li>Large wall graphics</li>
                <li>Custom wall wraps</li>
                <li>Wall graphics for businesses / offices</li>
                <li>Wall and floor decals</li>
                <li>Photo Tex™ fabric prints</li>
              </ul>
            </div>
          </div>
          <div className={styles.gridItems} id="sec">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_frost}
              alt="Privacy film"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Privacy Films</h3>
              <ul className={styles.ul}>
                <li>Commercial safety window films</li>
                <li>Commercial window films</li>
                <li>Privacy and decorative window films</li>
                <li>Frosted window films</li>
              </ul>
            </div>
          </div>

          <div className={styles.gridItems} id="rec">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_reception}
              alt="reception logo"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Reception Graphics, Reception Logos</h3>
              <ul className={styles.ul}>
                <li>Reception logo design</li>
                <li>Reception logo wall</li>
                <li>Reception logo signage</li>
                <li>Reception logo sign</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Signage SECTION --> */}
      <div
        className={styles.row + " " + styles.signage_row}
        id="signageSection"
      >
        <h2
          className={
            styles.h2 +
            " " +
            styles.sectionTitle +
            " " +
            styles.sectionTitleExtraSpc
          }
        >
          SIGNAGE
        </h2>
        <div className={styles.gridItemsContainer} id="signage">
          <div className={styles.gridItems} id="way">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_exit}
              alt="exit sign"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Way Finding</h3>
              <ul className={styles.ul}>
                <li>Wayfinding and sign design</li>
                <li>Wayfinding signage systems</li>
                <li>Digital wayfinding signage</li>
              </ul>
            </div>
          </div>
          <div className={styles.gridItems} id="saf">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_safety}
              alt="safety signage"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Safety Signage</h3>
              <ul className={styles.ul}>
                <li>Workplace safety signage</li>
                <li>Construction safety signs</li>
                <li>Custom safety signs</li>
                <li>Custom metal / magnetic safety signs</li>
                <li>Industrial safety signs</li>
                <li>Safety signs and workplace signs</li>
              </ul>
            </div>
          </div>
          <div className={styles.gridItems} id="ins">
            <Image
              //
              // width={100}
              // height={100}
              className={styles.gridImg}
              src={img_ladder}
              alt="installation photo - stairs"
            />
            <div className={styles.subsectionList}>
              <h3 className={styles.h3}>Installation Services</h3>
              <ul className={styles.ul}>
                <li>Pre-install preparation/cleaning</li>
                <li>Installation accessories</li>
                <li>Worry-free job completion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
