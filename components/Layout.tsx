import React, { ReactNode } from "react";
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
      <Head>
        <title>TGIF Toastmasters</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
