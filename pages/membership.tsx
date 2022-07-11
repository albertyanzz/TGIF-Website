import type { NextPage } from "next";
import styles from "../styles/Membership.module.css";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";

const Membership: NextPage = ({}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>New Member Form</div> */}
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfdF_c9T_R-hfT-vXf9m-kJslOC6txW5-rv3qH23bUHU8s2zQ/viewform?embedded=true"
          width={isMobile ? "320" : "640"}
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
