import styles from "../styles/TestimonialCard.module.css";

export const TestimonialCard: React.FC = () => {
  const pic = {
    backgroundImage: "url(/images/testimonial_1.jpg)",
  };

  return (
    <div className={styles.card_outer}>
      <div className={styles.card_text}>
        <div>
          This is a testimonial text blah blah This is a testimonial text blah
          blah This is a testimonial text blah blah
        </div>
      </div>
      <div className={styles.card_profile}>
        <div className={styles.profile_pic} style={pic} />
        <div className={styles.profile_title}>
          <div className={styles.title_name}>Jenny Chang</div>
          <div className={styles.title_position}>
            Previous TGIF President and member since 2013
          </div>
        </div>
      </div>
    </div>
  );
};
