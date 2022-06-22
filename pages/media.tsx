import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";
import { Params } from "next/dist/server/router";
import { getYoutubeEmbed, getFlickrEmbed, getPhotos } from "../lib/google";
import { getAllPhotoFiles } from "../lib/posts";
import DOMPurify from "isomorphic-dompurify";
import Gallery from "react-photo-gallery";
import styles from "../styles/Media.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const photoFiles = getAllPhotoFiles();
  const ytData = await getYoutubeEmbed();
  const frData = await getFlickrEmbed();

  return {
    props: {
      ytData,
      frData,
      photoFiles,
    },
  };
};

const Media: NextPage<Params> = ({ ytData, frData, photoFiles }) => {
  const [featVid, setFeatVid] = useState("Av_lQz3d-dg");

  const otherVids = ["Av_lQz3d-dg", "s7hjYJC1ASg", "Ctl6xrrNhm0"];

  // console.log(photoFiles);

  const photos = photoFiles.map((photo: { id: string }) => {
    return { src: `images/featured/${photo.id}`, width: 1, height: 1 };
  });

  // console.log(photos);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Featured Videos</div>
      <div className={styles.youtube_container}>
        <div className={styles.main_video}>
          <iframe
            width="1280"
            height="400"
            src={`https://www.youtube.com/embed/${featVid}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.right_menu}>
          <div className={styles.video_bar}>
            {otherVids.map((video: string) => {
              return (
                <div
                  key={video}
                  className={styles.side_video}
                  style={{
                    backgroundImage: `url(http://img.youtube.com/vi/${video}/0.jpg)`,
                  }}
                  onClick={() => {
                    setFeatVid(video);
                  }}
                />
              );
            })}
          </div>
          <Link href="https://www.youtube.com/channel/UCFGXBqo11Wu1wsBGoFpcjoA/featured">
            <a className={styles.channel_button}>
              <p>Youtube Channel</p>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.title}>Featured Photos</div>
      <Link href="https://www.flickr.com/photos/durbanbay/albums/with/72177720298516816">
        <a className={styles.photo_button}>
          <p>View More on Flickr</p>
        </a>
      </Link>
      <div className={styles.photos}>
        <Gallery photos={photos}></Gallery>
      </div>
    </div>
  );
};

export default Media;
