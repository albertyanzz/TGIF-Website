import styles from "../styles/Footer.module.css";
import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
// import { Facebook, YouTube, Instagram } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { SvgIcon } from "../node_modules/@mui/material/index";
import facebook from "../assets/icons8-facebook.svg";
import youtube from "../assets/icons8-youtube.svg";
import instagram from "../assets/icons8-instagram.svg";

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
            sx={{
              input: { color: "white" },
              color: "white",
              marginRight: "30px",
            }}
          />
          <Button variant="contained" color="secondary" size="small">
            Sign up for newsletter
          </Button>
        </div>
        <div className={styles.contact}>
          <div>Contact Us: tgiftoastmaster@gmail.com</div>
          <div>
            <a href="https://www.facebook.com/groups/TGIFCT/">
              <SvgIcon
                component={facebook}
                style={{ fontSize: 40 }}
                inheritViewBox
              />
            </a>
            <a href="https://www.instagram.com/tgiftoastmasters/">
              <SvgIcon
                component={instagram}
                style={{ fontSize: 40 }}
                inheritViewBox
              />
            </a>
            <a href="https://www.youtube.com/channel/UCFGXBqo11Wu1wsBGoFpcjoA">
              <SvgIcon
                component={youtube}
                style={{ fontSize: 40 }}
                inheritViewBox
              />
            </a>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
