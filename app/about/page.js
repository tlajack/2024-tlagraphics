import Image from "next/image";
import styles from "./page.module.css";

import introImage from "../images/Toronto-Scrapers.jpg";
import whoImage from "../images/bg-whoweare.jpg";
import imaginebg from "../images/bg-imagine.jpg";
import thanksbg from "../images/bg-thanks.jpg";

import logo from "../images/tla-logo-tealwhite.png";
import photoStudio from "../images/whoweare-01.jpg";
import photoPrinter from "../images/whoweare-02.png";
import icons from "../images/icons.png";
import markSignature from "../images/Mark-signature.png";
import whychoose01 from "../images/whychooseus-01.jpg";
import whychoose02 from "../images/whychooseus-02.png";
import bmo from "../images/logos/BMO-logo.png";
import canadagoose from "../images/logos/canadagoose-logo.png";
import coke from "../images/logos/coke-logo.png";
import hd from "../images/logos/homedepot-logo.png";
import lg from "../images/logos/LG-logo.png";
import molson from "../images/logos/molson-logo.png";
import nike from "../images/logos/nike-logo.png";
import noble from "../images/logos/noble-logo.png";
import philips from "../images/logos/philips-logo.png";
import raps from "../images/logos/raptors-logo.png";
import scotia from "../images/logos/scotiabankarena-logo.png";
import shoppers from "../images/logos/shoppers-logo.png";
import smokes from "../images/logos/smokes-logo.png";
import tml from "../images/logos/tml-logo.png";
import tfc from "../images/logos/torontoFC-logo.png";

function about() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.section + " " + styles.intro}>
          <Image
            className={styles.introlog}
            src={logo}
            alt="TLA Graphics Logo"
          />
          <p>Transforming Ideas into Stunning Visuals</p>
        </div>

        <div className={styles.section + " " + styles.whoweare}>
          <div className={styles.whoweareImages}>
            <Image
              className={styles.whoweareImage1}
              src={photoStudio}
              alt="design studio"
            />
            <Image
              className={styles.whoweareImage2}
              src={photoPrinter}
              alt="printer"
            />
          </div>
          <div className={styles.whoweareCopy}>
            <h1>Who we are</h1>
            <hr className={styles.hr} />
            <p className={styles.p}>
              TLA Graphics is a tight-knit team of strategic visual
              communicators who work hard to clarify your desired outcome,
              understand your unique challenges, and translate the resulting
              ideas into stunning visuals that communicate your brand.
            </p>
          </div>
        </div>

        <div className={styles.section + " " + styles.key}>
          <h1>Key Advantages</h1>
          <div className={styles.parallelogram}>
            <p className={styles.p}>High end production equipment</p>
          </div>
          <div className={styles.parallelogram}>
            <p className={styles.p}>Printing 98.3% of pantone colours</p>
          </div>
          <div className={styles.parallelogram}>
            <p className={styles.p}>Deep expertise in innovation</p>
          </div>
          <div className={styles.parallelogram}>
            <p className={styles.p}>Second generation family business</p>
          </div>
          <div className={styles.parallelogram}>
            <p className={styles.p}>
              3M Preferred Partner &amp; Trulife partner
            </p>
          </div>
        </div>

        <div className={styles.section + " " + styles.whatwedo}>
          <div className={styles.text}>
            <h1>What we do</h1>
            <hr className={styles.hr} />
            <p>
              Clients call us graphic engineers and strategic partners, but at
              the end of the day we simply take care of every visual need for
              your business, inside and out. We bring your ideas to life by
              running them through our internal innovation process while pushing
              the physical limits of media to create stunning visual products
              that support your brand.
            </p>
          </div>
          <Image
            src={icons}
            className={styles.whatwedoimage}
            alt="design &amp; planning, pre-production, production, installation, shipping &amp; pick-up"
          />
        </div>

        <div className={styles.section + " " + styles.whychooseus}>
          <div className={styles.image}>
            <Image
              src={whychoose01}
              alt="precision cutter by Zund"
              className={styles.whychooseImgs}
            />
            <Image
              src={whychoose02}
              alt="meeting room"
              className={styles.whychooseImgs}
            />
          </div>

          <div className={styles.whychooseCopy}>
            <h1>Why choose us</h1>
            <hr className={styles.hr} />
            <p>
              Our intense focus on attention to detail, exquisite production
              quality and lightning fast speed underpin everything we do.
            </p>
            <p>
              As your graphics partner, you can depend on our expert team going
              above and beyond to breathe new life into an existing product or
              solve a new challenge with a creative solution. And we’re on time,
              every time.
            </p>
          </div>
        </div>

        <div className={styles.section + " " + styles.ourpromise}>
          <h1>Our promise to you</h1>

          <div className={styles.parallelogram}>
            <p className={styles.p}>Never sacrifice speed over quality</p>
          </div>
          <div className={styles.parallelogram}>
            <p className={styles.p}>Meticulous attention to detail</p>
          </div>
          <div className={styles.parallelogram}>
            <p className={styles.p}>Multiple eyes checking every project</p>
          </div>
          <div className={styles.parallelogram}>
            <p className={styles.p}>Cutting-edge technology</p>
          </div>
        </div>

        <div className={styles.section + " " + styles.companies}>
          <h1 className={styles.h1}>Companies we work with </h1>

          <div className={styles.companiesImages}>
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={philips}
              alt="logo philips"
              title="Philips"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={coke}
              alt="logo coke"
              title="Coca-Cola"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={noble}
              alt="logo noble"
              title="Noble"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={scotia}
              alt="logo scotia"
              title="Scotiabank Arena"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={nike}
              alt="logo nike"
              title="Nike"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={raps}
              alt="logo raps"
              title="Toronto Raptors"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={molson}
              alt="logo molson"
              title="Molson"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={canadagoose}
              alt="logo canadagoose"
              title="Canada Goose"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={hd}
              alt="logo hd"
              title="Home Depot"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={smokes}
              alt="logo smokes"
              title="Smokes Poutinerie"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={bmo}
              alt="logo bmo"
              title="BMO Field"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={tfc}
              alt="logo tfc"
              title="Toronto FC"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={lg}
              alt="logo lg"
              title="LG"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={shoppers}
              alt="logo shoppers"
              title="Shoppers Drugmart"
            />
            <Image
              className={styles.companyImg}
              loading="lazy"
              src={tml}
              alt="logo tml"
              title="Toronto Maple Leafs"
            />
          </div>
        </div>

        <div className={styles.section + " " + styles.imagine}>
          <div className={styles.imaginemain}>
            <h1>You imagine it, we produce it.</h1>
            <hr className={styles.hr} />

            <p>
              We provide creative solutions for a multitude of truly unique and
              custom projects. From custom single-piece orders to duplicates in
              the thousands—we do it all!
            </p>
          </div>
          <div className={styles.imaginetext}>
            <p className={styles.imaginetext1}>
              Our no-boundaries approach to a project ensures success in
              developing exclusive and one of a kind experiences to fit your
              brand purpose.
            </p>
            <p className={styles.imaginetext2}>
              At TLA Graphics we recognize the needs of a brand as
              individualistic and unlike anything else. We acknowledge these
              differences by implementing a process which operates in this same
              way. No two projects are alike and we persistently encourage new
              challenges and push the limits of what is possible.
            </p>
            <p className={styles.imaginetext3}>
              If you have a project in mind please discuss it with us and we’ll
              be happy to find the correct process and materials specific to
              your unique brand needs
            </p>
          </div>
        </div>
        <div className={styles.section + " " + styles.thanks}>
          {/* <Image
          className={styles.imaginebg"
          src={thanksbg}
          alt="abstract texture"
          formats={["auto", "webp", "avif"]}
        ></Image> */}

          <div className={styles.thanksmain}>
            <p>
              I would personally like to thank you for this opportunity. TLA’s
              objective is to become a valued resource partner that can assist
              with your team’s challenging development strategies, client
              deliverables, as well as the demands of driving new business. We
              understand that every project must hit its mark.
            </p>
            <p>
              As president of TLA Graphics I can promise that everyone is here
              to provide support to you and your team. We will work tirelessly
              to earn your trust.
            </p>
            <p>Sincerely, Mark White</p>
            <Image
              src={markSignature}
              className={styles.signature}
              alt="Signature Mark White"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
