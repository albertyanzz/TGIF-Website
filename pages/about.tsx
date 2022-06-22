import type { NextPage } from "next";
import { Button } from "../components/Button";
import Link from "next/link";
import styles from "../styles/About.module.css";

const About: NextPage = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About</div>
      <div id="toastmasters" className={styles.section}>
        <div className={styles.tm_img} />
        <div className={styles.text_container}>
          <div className={styles.text_title}>What is Toastmasters?</div>
        </div>
      </div>
      <div id="tgif" className={styles.section}>
        <div className={styles.text_container}>
          <div className={styles.text_title}>Who is TGIF?</div>
        </div>
        <div className={styles.tgif_img} />
      </div>
      <div id="join" className={styles.bot_section}>
        <div className={styles.why_img} />
        <div className={styles.bot_text_container}>
          <div className={styles.text_title}>Why should you join?</div>
          <div></div>
          <div>
            <Link href="/membership">
              <Button width="200px" color="#F4BA8D">
                Join Now!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
