import styles from "../styles/SpotlightIcon.module.css";

export const SpotlightIcon: React.FC = () => {
  const pic = {
    backgroundImage: "url(/images/testimonial_1.jpg)",
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile_pic} style={pic} />
      <div className={styles.profile_name}>Jenny</div>
      <div className={styles.profile_title}>President</div>
    </div>
  );
};
