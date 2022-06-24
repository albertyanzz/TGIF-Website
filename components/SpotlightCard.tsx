import React, { ReactNode } from "react";
import styles from "../styles/SpotlightCard.module.css";

interface IProps {
  name: string;
  position: string;
  image: string;
  achievements: string[];
  children: ReactNode;
}

export const SpotlightCard: React.FC<IProps> = ({
  name,
  position,
  image,
  achievements,
  children,
}) => {
  const pic = {
    backgroundImage: `url(/images/spotlight/${image})`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.picture} style={pic} />
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.position}>{position}</div>
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.summary}>{children}</div>
        <div className={styles.achievements}>
          {achievements.map((achievement: string, i, achievements) => {
            return (
              <React.Fragment key={achievement}>
                {achievement}
                {i + 1 === achievements.length ? null : <br />}
              </React.Fragment>
            );
          })}
          {/* 2017 Table Topics District Contest 3rd Place
          <br />
          2020 Chinese Evaluation District Contest 1st Place 2021
          <br />
          International Speech Contest Divison F 2nd Place */}
        </div>
      </div>
    </div>
  );
};
