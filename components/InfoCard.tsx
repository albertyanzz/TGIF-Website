import styles from "../styles/InfoCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
  color: string;
  image: string;
  label: string;
  link?: string;
  learnMore?: boolean;
}

export const InfoCard: React.FC<IProps> = ({
  color,
  children,
  image,
  label,
  link,
  learnMore,
}) => {
  // const pic = {
  //   backgroundImage: `url(/images/${image})`,
  // };

  const cardColor = {
    backgroundColor: color,
  };

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
          <div className={styles.description}>{children}</div>
        </div>
      ) : (
        <>
          <div className={styles.card_banner}>
            <div className={styles.card_sphere}>
              <div className={styles.card_text}>{label}</div>
            </div>
          </div>
          <div className={styles.card_pic}>
            <Image
              src={`/images/${image}`}
              alt={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            {/* {learnMore && (
              <div className={styles.link_text}>
                <div>Learn More</div>
              </div>
            )} */}
          </div>
        </>
      )}
      {learnMore && link && (
        <div className={styles.link_text}>
          <Link href={link}>
            <a>Learn More</a>
          </Link>
        </div>
      )}
    </div>
  );
};
