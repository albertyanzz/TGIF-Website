import styles from "../styles/Footer.module.css";
import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Facebook, YouTube, Instagram } from "@mui/icons-material";
import { TextField } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <AppBar color="primary" position="static" elevation={0}>
      <Toolbar className={styles.footer}>
        <div className={styles.newsletter}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            color="secondary"
            sx={{ input: { color: "white" }, color: "white" }}
            className={styles.input}
          />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={styles.button}
          >
            Sign up for newsletter
          </Button>
        </div>
        <div className={styles.contact}>
          <div>Contact Us: tgiftoastmasters@gmail.com</div>
          <div>
            <a href="https://www.facebook.com/groups/TGIFCT/">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/tgiftoastmasters/">
              <Instagram />
            </a>
            <a href="https://www.youtube.com/channel/UCFGXBqo11Wu1wsBGoFpcjoA">
              <YouTube />
            </a>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
