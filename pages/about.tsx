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
      <div className={styles.title}>About TGIF Toastmasters</div>
      <div
        id="toastmasters"
        className={styles.tm_section}
        style={{ height: isMobile ? "auto" : "800px" }}
      >
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
            worldwide network of clubs. Headquartered in the US, the
            organization's membership exceeds 300,000 in more than 15,800 clubs
            in 149 countries. Since 1924, Toastmasters International has helped
            people from diverse backgrounds become more confident speakers,
            communicators, and leaders. For more information about Toastmasters
            International, please go to{" "}
            <a
              href="https://www.toastmasters.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.toastmasters.org/
            </a>
            . <br />
            <br />
            In Taiwan, the first Toastmasters club was founded in 1958. Now,
            there are 182 active clubs islandwide in Chinese, English, Japanese
            and Taiwanese. For more information about Toastmasters in Taiwan,
            please go to{" "}
            <a
              href="https://www.toastmasters.org.tw/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.toastmasters.org.tw/
            </a>
            .
          </div>
        </div>
      </div>
      <div
        id="tgif"
        className={styles.tgif_section}
        style={{ height: isMobile ? "auto" : "800px" }}
      >
        <div
          className={
            isMobile ? styles.mobile_text_container : styles.text_container
          }
        >
          <div className={styles.text_title}>Who is TGIF?</div>
          <div className={styles.text_content}>
            Established in 2013, “Thank God It’s Friday (TGIF)” Bilingual
            Christian Toastmaster Club began as a place where Christians can
            practice praising the Lord. It has since diversified and welcomes
            anyone who is interested in improving their public speaking and
            leadership skills. The club has strong Christian traditions of
            opening songs, group huddles and closing prayers. <br />
            <br />
            Its signature events such as speech marathons, debate contests,
            workshops, outings and themed parties are highly anticipated events
            throughout the Toastmaster community in Taiwan. Each club meeting
            has elements of Mandarin and English and members can choose which
            language they want to speak. The TGIF community is built on love,
            fun, and excellence, inspiring members to grow with their stories.
          </div>
        </div>
        {!isMobile && <div className={styles.tgif_img} />}
      </div>
      <div
        id="join"
        className={isMobile ? styles.mobile_bot_section : styles.bot_section}
        style={{ height: isMobile ? "auto" : "1200px" }}
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
            You should join TGIF if you are looking to improve your English or
            Mandarin speaking capability. TGIF is a championship caliber club,
            holding the record of producing the top 3 national finalists each
            year in the Annual Toastmasters National Contests since its
            founding. <br />
            <br />
            It is also a place where you will meet highly motivated and
            interesting individuals who want to learn and improve. More than 50%
            of our members are English native speakers from abroad or Taiwanese
            who have lived abroad. It has a strong tradition of mentoring and
            supporting member growth. By joining, you will definitely improve
            and become a better version of yourself, with new friends along the
            way too!
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
