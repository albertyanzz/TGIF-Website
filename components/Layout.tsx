import React, { ReactNode } from "react";
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import { theme } from "../constants/theme";
import { ThemeProvider } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.pageContainer}>
        <Head>
          <title>TGIF Toastmasters</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Header />
        <main className={styles.wrapper}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}
