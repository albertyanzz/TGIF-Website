import styles from "../styles/EventCard.module.css";
import { useState } from "react";
import { Button } from "./Button";
import { IRSVP } from "../lib/types";

interface IProps {
  name: string;
  date: string;
  link?: string;
}

export const EventCard: React.FC<IProps> = ({ name, date, link }) => {
  const [rsvp, setRsvp] = useState(false);
  const [rsvpSubmit, setRsvpSubmit] = useState(false);
  const [rname, setrName] = useState("");
  const [rphone, setrPhone] = useState("");
  const [remail, setrEmail] = useState("");

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setrName(event.currentTarget.value);
  };

  const handlePhoneChange = (event: React.FormEvent<HTMLInputElement>) => {
    setrPhone(event.currentTarget.value);
  };

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setrEmail(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
    // if (!validForm()) {
    //     setSubmit(false);
    //     return;
    // }

    const final_rsvp: IRSVP = {
      name: rname,
      phone: rphone,
      email: remail,
      date: date,
    };

    const res = await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify(final_rsvp),
    });
    console.log(res);

    setRsvpSubmit(true);
  };

  return rsvp ? (
    rsvpSubmit ? (
      <div className={styles.card_container}>
        <div>Successfully RSVP'd!</div>
        <Button
          color="#F77E21"
          width="50px"
          height="50px"
          onClick={() => {
            setRsvp(false);
          }}
        >
          {"<"}
        </Button>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        <div className={styles.card_container}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            value={rname}
            onChange={handleNameChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Phone"
            value={rphone}
            onChange={handlePhoneChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            value={remail}
            onChange={handleEmailChange}
          />
          <div className={styles.button_container_rsvp}>
            <Button
              color="#F77E21"
              width="20%"
              height="40%"
              onClick={() => {
                setRsvp(false);
              }}
            >
              {"<"}
            </Button>
            <Button color="#F77E21" width="70%" height="40%" type="submit">
              RSVP
            </Button>
          </div>
        </div>
      </form>
    )
  ) : (
    <div className={styles.card_container}>
      <div className={styles.text_container}>
        <div className={styles.event_title}>{name}</div>
        <div className={styles.event_date}>{date}</div>
      </div>
      <div className={styles.button_container}>
        <Button
          color={link ? "#F77E21" : "#B8B8B8"}
          width="100%"
          height="40%"
          onClick={() => {
            window.open(link);
          }}
        >
          Facebook Event Page
        </Button>
        <Button
          color="#F77E21"
          width="100%"
          height="40%"
          onClick={() => {
            setRsvp(true);
          }}
        >
          RSVP
        </Button>
      </div>
    </div>
  );
};