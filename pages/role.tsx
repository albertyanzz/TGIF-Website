import type { NextPage } from "next";
import styles from "../styles/Role.module.css";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";
import Head from "next/head";

const Role: NextPage = ({}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up for a TGIF Meeting Role</title>
      </Head>
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSczB4dAD6ZO0jYmahPy5FHBz83AgZpcCGQ7eCDh1YeUahxtfA/viewform?embedded=true"
          width={isMobile ? "320" : "640"}
          height="1332"
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
