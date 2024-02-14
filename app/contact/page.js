import styles from "./contact.module.css";

function contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Form</h1>
      <p>Use the form below to get in touch with us:</p>
      <form
        name="webContact"
        method="post"
        data-netlify="true"
        data-netlify-recaptcha="true"
        action="/contactSuccess"
        netlify-honeypot="bot-field"
      >
        {/* hidden input for netlify */}
        <input type="hidden" name="form-name" value="webContact" />

        <ul className={styles.ul}>
          <li style={{ visibility: `hidden`, display: `none` }}>
            <label htmlFor="bot-field" className={styles.label}>
              <input name="bot-field" />
            </label>
          </li>
          <li className={styles.li}>
            <label htmlFor="name" className={styles.label}>
              Full name:
            </label>
            <input type="text" name="name" className={styles.input} />
          </li>
          <li className={styles.li}>
            <label htmlFor="email" className={styles.label}>
              email:
            </label>
            <input type="text" name="email" className={styles.input} />
          </li>
          <li className={styles.li}>
            <label htmlFor="phone" className={styles.label}>
              phone:{" "}
            </label>
            <input type="text" name="phone" className={styles.input} />
          </li>
          <li className={styles.li}>
            <label htmlFor="subject" className={styles.label}>
              Subject:{" "}
            </label>
            <input type="text" name="subject" className={styles.input} />
          </li>
          <li className={styles.li}>
            <label htmlFor="message" className={styles.label}>
              Message:{" "}
            </label>
            <textarea
              name="message"
              rows="4"
              className={styles.input}
            ></textarea>
          </li>
          <li className={styles.li}>
            <button className={styles.button} type="submit">
              Send Message
            </button>
          </li>
        </ul>
      </form>
      <hr className={styles.hr} />
      <h1 className={styles.h1}>File Upload</h1>
      <p>
        <a
          className={styles.a}
          href="https://www.dropbox.com/request/FL93CCTD7UCysvFI2Pp6"
        >
          Click here
        </a>{" "}
        to upload files to us.
      </p>
    </div>
  );
}

export default contact;
