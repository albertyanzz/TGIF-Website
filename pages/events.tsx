import type { NextPage } from "next";
import { EventCard } from "../components/EventCard";
import styles from "../styles/Events.module.css";

const Calendar: NextPage = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Upcoming Events</div>
      <div>
        <EventCard
          name="TGIF Meeting#250: Table Topics Speech Marathon"
          date="6/17/2022"
          link="https://fb.me/e/1zobW4hCO"
        ></EventCard>
      </div>
    </div>
  );
};

export default Calendar;