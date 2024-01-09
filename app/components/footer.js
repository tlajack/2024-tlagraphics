import Link from "next/link";
import styles from "./footer.module.css";

function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.mainFooter}>
        <div>
          <p>
            <strong>TLA Graphics Ltd.</strong>
            <br />
            4 Paisley Lane <br />
            Uxbridge, ON L9P 0G5
          </p>
        </div>
        <div>
          <p>
            <a className={styles.a} href="tel:1-905-726-2600" title="phone">
              +1 (905) 726-2600
            </a>
            <br />
            <a
              className={styles.a}
              href="mailto:info@tlagraphics.com"
              title="email"
            >
              info@tlagraphics.com
            </a>
          </p>
          {/* <p className="social_icons" alt="twitter icon">
            <a
              className={styles.a}
              href="https://www.facebook.com/tlagraphics/"
              title="facebook icon"
            ></a>
            <a
              className={styles.a}
              href="https://www.linkedin.com/company/tla-graphics"
            ></a>
          </p> */}
          <p>
            <a
              className={styles.a}
              href="https://www.dropbox.com/request/FL93CCTD7UCysvFI2Pp6"
              title="file upload"
            >
              File upload
            </a>
          </p>
        </div>
        <div>
          <p>
            <Link className={styles.a} href="#top">
              <span class="to-the-top-long">
                To the top <span aria-hidden="true">↑</span>
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.copy}>
        <p>
          Copyright &copy; {new Date().getFullYear()} TLA Graphics · All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default footer;
