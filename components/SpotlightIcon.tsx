import styles from "../styles/SpotlightIcon.module.css";
import Image from "next/image";

interface IProps {
  image: string;
  name: string;
  position: string;
  onClick?: React.MouseEventHandler;
}

export const SpotlightIcon: React.FC<IProps> = ({
  image,
  name,
  position,
  onClick,
}) => {
  const pic = {
    backgroundImage: `url(/images/spotlight/${image})`,
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.profile_pic}>
        <Image
          className={styles.image}
          src={`/images/spotlight/${image}`}
          alt={image}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className={styles.profile_name}>{name.split(" ")[0]}</div>
      {/* <div className={styles.profile_title}>{position}</div> */}
    </div>
  );
};
