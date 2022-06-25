import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Params } from "next/dist/server/router";
import { getYoutubeLinks } from "../lib/google";
import { getAllPhotoFiles } from "../lib/posts";
import styles from "../styles/Media.module.css";
import { useMediaQuery } from "@mui/material";
import { theme } from "../constants/theme";

export const getServerSideProps: GetServerSideProps = async () => {
  const photoFiles = await getAllPhotoFiles();
  const ytLinks = await getYoutubeLinks();

  return {
    props: {
      photoFiles,
      ytLinks,
    },
  };
};

const Media: NextPage<Params> = ({ photoFiles, ytLinks }) => {
  const ytIds = ytLinks.map((link: string[]) => {
    return link[0].split("=")[1];
  });

  const [featVid, setFeatVid] = useState(ytIds[0]);
  const [featPhoto, setFeatPhoto] = useState("");
  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styles.container}>
      <div className={styles.title}>Featured Videos</div>
      <div
        className={
          isMobile ? styles.mobile_youtube_container : styles.youtube_container
        }
      >
        <div className={styles.main_video}>
          <iframe
            width={isMobile ? "300" : "1280"}
            height={isMobile ? "200" : "400"}
            src={`https://www.youtube.com/embed/${featVid}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={isMobile ? styles.bottom_menu : styles.right_menu}>
          <div
            className={isMobile ? styles.mobile_video_bar : styles.video_bar}
          >
            {ytIds.map((video: string) => {
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
        {photoFiles.map((photo: { id: string }) => {
          return (
            <div
              key={photo.id}
              className={styles.photo}
              style={{ backgroundImage: `url('images/featured/${photo.id}')` }}
              onClick={() => {
                setFeatPhoto(photo.id);
                setPhotoIsOpen(true);
              }}
            ></div>
          );
        })}
      </div>
      {photoIsOpen && (
        <div
          className={styles.photo_modal}
          onClick={() => {
            setPhotoIsOpen(false);
          }}
        >
          <Image
            src={`/images/featured/${featPhoto}`}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      )}
    </div>
  );
};

export default Media;
