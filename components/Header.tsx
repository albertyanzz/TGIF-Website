import styles from "../styles/Header.module.css";
import Link from "next/link";
import { Logo } from "./Logo";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../constants/theme";

// Update the AppBar's color prop options
// declare module "@mui/material/AppBar" {
//   interface AppBarPropsColorOverrides {
//     tertiary: true;
//     quaternary: true;
//   }
// }

export const Header: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className={styles.toolbar}>
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
    </ThemeProvider>
  );
};
