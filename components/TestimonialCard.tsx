import styles from "../styles/TestimonialCard.module.css";
import { ReactNode } from "react";

interface IProps {
  name: string;
  title: string;
  image: string;
  children: ReactNode;
}

export const TestimonialCard: React.FC<IProps> = ({
  name,
  title,
  image,
  children,
}) => {
  const pic = {
    backgroundImage: `url(/images/testimonials/${image})`,
  };

  return (
    <div className={styles.card_outer}>
      <div className={styles.card_text}>
        <div>{children}</div>
      </div>
      <div className={styles.card_profile}>
        <div className={styles.profile_pic} style={pic} />
        <div className={styles.profile_title}>
          <div className={styles.title_name}>{name}</div>
          <div className={styles.title_position}>{title}</div>
        </div>
      </div>
    </div>
  );
};
