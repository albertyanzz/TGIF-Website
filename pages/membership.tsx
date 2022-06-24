import type { NextPage } from "next";
import styles from "../styles/Membership.module.css";

const Membership: NextPage = ({}) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>New Member Form</div> */}
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe7NlCC9Ru3ld7DBgE-0mbScIOawz9NAFX6mJ8HIyBZu1aZVQ/viewform?embedded=true"
          width="640"
          height="979"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Membership;
