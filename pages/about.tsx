import type { NextPage } from "next";
import { Button } from "../components/Button";
import Link from "next/link";
import styles from "../styles/About.module.css";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";

const About: NextPage = ({}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styles.container}>
      <div className={styles.title}>About</div>
      <div id="toastmasters" className={styles.tm_section}>
        {!isMobile && <div className={styles.tm_img} />}
        <div
          className={
            isMobile ? styles.mobile_text_container : styles.text_container
          }
        >
          <div className={styles.text_title}>What is Toastmasters?</div>
          <div className={styles.text_content}>
            Toastmasters International is a nonprofit educational organization
            that teaches public speaking and leadership skills through a
            worldwide network of clubs in 145 countries. In Taiwan, there are
            nearly 180 clubs in Chinese, English, Japanese and Taiwanese.
          </div>
        </div>
      </div>
      <div id="tgif" className={styles.tgif_section}>
        <div
          className={
            isMobile ? styles.mobile_text_container : styles.text_container
          }
        >
          <div className={styles.text_title}>Who is TGIF?</div>
          <div className={styles.text_content}>
            Established in 2013, TGIF started off as a Christian Toastmasters
            club and is now open to all while maintaining longtime traditions
            such as a welcome song and closing prayers. TGIF is a bilingual club
            (English/Mandarin) built on love, fun, and excellence, inspiring
            members to grow with their stories
          </div>
        </div>
        {!isMobile && <div className={styles.tgif_img} />}
      </div>
      <div
        id="join"
        className={isMobile ? styles.mobile_bot_section : styles.bot_section}
      >
        {!isMobile && <div className={styles.why_img} />}
        <div
          className={
            isMobile
              ? styles.mobile_bot_text_container
              : styles.bot_text_container
          }
        >
          <div className={styles.text_title}>Why should you join?</div>
          <div className={styles.text_content}>
            TGIF is a championship caliber club, holding the record of an 8 year
            streak of top 3 national finalists in the annual speech contest.
            With a diverse group of members and a mentorship program, there is
            an opportunity to grow for everyone.
          </div>
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
