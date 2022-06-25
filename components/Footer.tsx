import styles from "../styles/Footer.module.css";
import { useState } from "react";
import { Button } from "./Button";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { SvgIcon } from "../node_modules/@mui/material/index";
import facebook from "../assets/icons8-facebook.svg";
import youtube from "../assets/icons8-youtube.svg";
import instagram from "../assets/icons8-instagram.svg";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";
import isEmail from "validator/lib/isEmail";

export const Footer: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [email, setEmail] = useState("");

  const [emailIsLoading, setEmailIsLoading] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError(false);
    setSubmittedEmail(false);
    setEmailIsLoading(true);
    if (!isEmail(email)) {
      setEmailError(true);
      setEmailIsLoading(false);
      return;
    }

    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: email,
    });
    console.log(res);
    setEmailIsLoading(false);
    setSubmittedEmail(true);
  };

  return (
    <AppBar color="primary" position="static" elevation={0}>
      <Toolbar className={styles.footer}>
        <form onSubmit={handleSubmit}>
          <div
            className={isMobile ? styles.mobile_newsletter : styles.newsletter}
          >
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Button
              color="#F2DF74"
              width="200px"
              height="35px"
              type="submit"
              isLoading={emailIsLoading}
            >
              {!emailIsLoading ? "Sign up for newsletter" : ""}
            </Button>
          </div>
        </form>
        {submittedEmail && (
          <div className={styles.success_message}>Successfully signed up!</div>
        )}
        {emailError && (
          <div className={styles.error_message}>Please enter a valid email</div>
        )}
        <div className={isMobile ? styles.mobile_contact : styles.contact}>
          <div className={styles.tgif_email}>
            Contact Us: tgiftoastmaster@gmail.com
          </div>
          <div className={styles.social}>
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
