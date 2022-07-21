import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Params } from "next/dist/server/router";
import { EventCard } from "../components/EventCard";
import styles from "../styles/Events.module.css";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";
import { getEvents } from "../lib/google";

export const getServerSideProps: GetServerSideProps = async () => {
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
      <Head>
        <title>Upcoming TGIF Events</title>
      </Head>
      <div className={styles.title}>Upcoming Events</div>
      <div className={isMobile ? styles.mobile_events : styles.events}>
        {events.length === 0 ? (
          <div>Check back soon for upcoming events!</div>
        ) : (
          events.map((event: string[]) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default Calendar;
