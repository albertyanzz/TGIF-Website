import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";
import { Params } from "next/dist/server/router";
import { getPostsDataByFolder } from "../lib/posts";
import { ITestimonial } from "../lib/types";
import styles from "../styles/Index.module.css";
import { InfoCard } from "../components/InfoCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Button } from "../components/Button";
import DOMPurify from "isomorphic-dompurify";

export const getStaticProps: GetStaticProps = async () => {
  const testimonialDataPromise = await getPostsDataByFolder("testimonials");
  const testimonialData = await Promise.all(testimonialDataPromise);
  return {
    props: {
      testimonialData,
    },
  };
};

const Home: NextPage<Params> = ({ testimonialData }) => {
  const textArray = [
    "have fun",
    "learn",
    "are family",
    "grow with our stories",
  ];

  const [changingText, setChangingText] = useState("have fun");

  const buttonStyle = {
    color: "#F4BA8D",
    width: "200px",
  };

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
          <div className={styles.changing_text_wrapper}>
            <span className={styles.changing_text}>have fun</span>
            <span className={styles.changing_text}>learn</span>
            <span className={styles.changing_text}>are family</span>
            <span className={styles.changing_text}>grow with our stories</span>
            <span className={styles.changing_text}>have fun</span>
          </div>
        </div>
      </div>
      <div className={styles.info_boxes}>
        <InfoCard
          label="What is Toastmasters?"
          image="info_tm.jpg"
          color="#F2DF74"
          learnMore={true}
          link="/about#toastmasters"
        >
          Toastmasters International is a nonprofit educational organization
          that teaches public speaking and leadership skills through a worldwide
          network of clubs in 145 countries. In Taiwan, there are nearly 180
          clubs in Chinese, English, Japanese and Taiwanese.
        </InfoCard>
        <InfoCard
          label="Who is TGIF?"
          image="info_tgif.jpg"
          color="#F4BA8D"
          learnMore={true}
          link="/about#tgif"
        >
          Established in 2013, TGIF started off as a Christian Toastmasters club
          and is now open to all while maintaining longtime traditions such as a
          welcome song and closing prayers. TGIF is a bilingual club
          (English/Mandarin) built on love, fun, and excellence, inspiring
          members to grow with their stories.
        </InfoCard>
        <InfoCard
          label="Why join?"
          image="info_why.jpg"
          color="#F77E21"
          learnMore={true}
          link="/about#join"
        >
          TGIF is a championship caliber club, holding the record of an 8 year
          streak of top 3 national finalists in the annual speech contest. With
          a diverse group of members and a mentorship program, there is an
          opportunity to grow for everyone.
        </InfoCard>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.title_text}>Member Testimonials</div>
        <div className={styles.testimonial_cards}>
          {/* <TestimonialCard
            name={testimonialData[0].name}
            title={testimonialData[0].title}
            image={testimonialData[0].image}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: testimonialData[0].contentHtml,
              }}
            ></div>
          </TestimonialCard> */}
          {testimonialData.map((testimonial: ITestimonial) => (
            <TestimonialCard
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              key={testimonial.name}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(testimonial.contentHtml),
                }}
              ></div>
            </TestimonialCard>
          ))}
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
          <Link href="/events">
            <Button {...buttonStyle}>RSVP</Button>
          </Link>
          <Link href="/membership">
            <Button {...buttonStyle}>Membership</Button>
          </Link>
          <Link href="/role">
            <Button {...buttonStyle}>Sign up for role</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
