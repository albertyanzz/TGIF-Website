import type { NextPage } from "next";
import styles from "../styles/Index.module.css";
import { InfoCard } from "../components/InfoCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home_image}>
        <div className={styles.welcome_text}>
          Welcome To
          <br />
          TGIF!
        </div>
        <div className={styles.sub_text}>
          <div>Here we...</div>
          <div className={styles.changing_text}>have fun</div>
        </div>
      </div>
      <div className={styles.info_boxes}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div className={styles.testimonials}>
        <div className={styles.title_text}>Member Testimonials</div>
        <div className={styles.testimonial_cards}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
      <div className={styles.info_container}>
        <div className={styles.info_top}>Join us!</div>
        <div className={styles.info_middle}>
          Meeting time: Every 1st and 3rd Friday of the month
          <br />
          Location: (Remote due to Covid)
          <br />
          Zoom link: https://us02web.zoom.us/j/8675406
        </div>
        <div className={styles.info_links}>
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Home;
