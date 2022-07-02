import styles from "../styles/Header.module.css";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { AppBar, Theme } from "@mui/material";
import { Toolbar } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";
import { Drawer } from "@mui/material";
import { SvgIcon } from "@mui/material";
import menu from "../assets/icons8-menu.svg";

export const Header: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const links = (
    <div className={styles.mobile_links}>
      <Link href="/about">
        <a className={styles.children}>About</a>
      </Link>
      <Link href="/spotlight">
        <a className={styles.children}>Member Spotlight</a>
      </Link>
      <Link href="/events">
        <a className={styles.children}>Upcoming Events</a>
      </Link>
      <Link href="/media">
        <a className={styles.children}>Highlights</a>
      </Link>
      <Link href="/role">
        <a className={styles.children}>Role Sign Up</a>
      </Link>
      <Link href="/membership">
        <a className={styles.children}>Join</a>
      </Link>
    </div>
  );

  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Toolbar variant={isMobile ? "regular" : "dense"}>
        <div className={styles.toolbar}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          {isMobile ? (
            <>
              <Drawer
                anchor="top"
                open={drawerIsOpen}
                onClose={handleDrawerToggle}
              >
                <div className={styles.drawer}>{links}</div>
              </Drawer>
              <SvgIcon
                component={menu}
                style={{ fontSize: 24, cursor: "pointer", color: "white" }}
                inheritViewBox
                onClick={handleDrawerToggle}
              />
            </>
          ) : (
            <div className={styles.links}>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/spotlight">
                <a>Member Spotlight</a>
              </Link>
              <Link href="/events">
                <a>Upcoming Events</a>
              </Link>
              <Link href="/media">
                <a>Highlights</a>
              </Link>
              <Link href="/role">
                <a>Role Sign Up</a>
              </Link>
              <Link href="/membership">
                <a>Join</a>
              </Link>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
