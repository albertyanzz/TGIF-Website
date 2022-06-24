import styles from "../styles/SpotlightIcon.module.css";

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
      <div className={styles.profile_pic} style={pic} />
      <div className={styles.profile_name}>{name.split(" ")[0]}</div>
      <div className={styles.profile_title}>{position}</div>
    </div>
  );
};
