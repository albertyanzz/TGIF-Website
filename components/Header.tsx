import styles from "../styles/Header.module.css";
import Link from "next/link";
import { Logo } from "./Logo";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Toolbar variant="dense">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className={styles.links}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/spotlight">
            <a>Member Spotlight</a>
          </Link>
          <Link href="/calendar">
            <a>Calendar</a>
          </Link>
          <Link href="/media">
            <a>Media</a>
          </Link>
          <Link href="/role">
            <a>Role Sign Up</a>
          </Link>
          <Link href="/membership">
            <a>Join</a>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
