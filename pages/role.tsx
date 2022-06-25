import type { NextPage } from "next";
import styles from "../styles/Role.module.css";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";

const Role: NextPage = ({}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>Role Sign Up Form</div> */}
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc-UXHKX0yRR-_Y3ug__0-4kX8X3WZKnmIf_4EaMZ9yBUoIug/viewform?embedded=true"
          width={isMobile ? "320" : "640"}
          height="1205"
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

export default Role;
