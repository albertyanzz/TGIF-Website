import styles from "../styles/InfoCard.module.css";
import Link from "next/link";
import { useState } from "react";

export const InfoCard: React.FC = () => {
  const pic = {
    backgroundImage: "url(/images/info_why.jpg)",
  };

  const cardColor = {
    backgroundColor: "orange",
  };

  const learnMore = true;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card_outer}
      style={cardColor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isHovered ? (
        <div className={styles.description_container}>
          <div className={styles.description}>
            Hello this is random text blah blah blah blah blah blah blah blah
          </div>
        </div>
      ) : (
        <>
          <div className={styles.card_banner}>
            <div className={styles.card_sphere}>
              <div className={styles.card_text}>Why Join?</div>
            </div>
          </div>
          <div className={styles.card_pic} style={pic}>
            {/* {learnMore && (
              <div className={styles.link_text}>
                <div>Learn More</div>
              </div>
            )} */}
          </div>
        </>
      )}
      {learnMore && (
        <div className={styles.link_text}>
          <Link href="/about">
            <a>Learn More</a>
          </Link>
        </div>
      )}
    </div>
  );
};
