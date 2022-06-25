import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import { EventCard } from "../components/EventCard";
import styles from "../styles/Events.module.css";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";
import { getEvents } from "../lib/google";

export const getStaticProps: GetStaticProps = async () => {
  const events = await getEvents();

  return {
    props: {
      events,
    },
  };
};

const Calendar: NextPage<Params> = ({ events }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styles.container}>
      <div className={styles.title}>Upcoming Events</div>
      <div className={isMobile ? styles.mobile_events : styles.events}>
        {events.map((event: string[]) => {
          return (
            <div
              className={
                isMobile ? styles.mobile_event_card : styles.event_card
              }
              key={event[0]}
            >
              <EventCard
                name={event[0]}
                date={event[1]}
                link={event[2]}
              ></EventCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
