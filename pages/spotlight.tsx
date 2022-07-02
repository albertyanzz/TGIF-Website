import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import { getPostsDataByFolder } from "../lib/posts";
import { ISpotlight } from "../lib/types";
import styles from "../styles/Spotlight.module.css";
import { SpotlightCard } from "../components/SpotlightCard";
import { SpotlightIcon } from "../components/SpotlightIcon";
import { useState } from "react";
import DOMPurify from "isomorphic-dompurify";

export const getStaticProps: GetStaticProps = async () => {
  const spotlightDataPromise = await getPostsDataByFolder("spotlights");
  const spotlightData = await Promise.all(spotlightDataPromise);
  return {
    props: {
      spotlightData,
    },
  };
};

const Spotlight: NextPage<Params> = ({ spotlightData }) => {
  spotlightData.sort((a: ISpotlight, b: ISpotlight) => a.id - b.id);

  const [spotlightMember, setSpotlightMember] = useState(spotlightData[0]);

  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>Member Spotlight</div> */}
      <SpotlightCard {...spotlightMember}>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(spotlightMember.contentHtml),
          }}
        ></div>
      </SpotlightCard>
      <div className={styles.icon_container}>
        <div className={styles.container_text}>Other members</div>
        <div className={styles.icons}>
          {spotlightData.map((spotlight: ISpotlight) => (
            <SpotlightIcon
              {...spotlight}
              key={spotlight.name}
              onClick={() => {
                setSpotlightMember(spotlight);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
