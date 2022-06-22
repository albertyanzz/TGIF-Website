import axios from "axios";
import { ISheets, IRSVP, IPhoto } from "./types";

const sheetAPI = axios.create({
  baseURL: "https://sheet.best/api/sheets",
  timeout: 30 * 1000,
});

export const getSheetData = async (): Promise<ISheets[]> => {
  const resp = await sheetAPI.get<ISheets[]>(
    "2dc50957-cba2-430e-b3b9-17536fc9fb6d/tabs/Links"
  );

  return resp.data;
};

export const getYoutubeEmbed = async (): Promise<string> => {
  const resp = await getSheetData();
  // TODO: change to reduce or mapping
  return resp[0].embed;
};

export const getFlickrEmbed = async (): Promise<string> => {
  const resp = await getSheetData();

  return resp[1].embed;
};

export const postRSVP = async (rsvp: IRSVP) => {
  sheetAPI.post("2dc50957-cba2-430e-b3b9-17536fc9fb6d/tabs/RSVP", rsvp);
};

export const getPhotos = async (): Promise<IPhoto[]> => {
  const resp = await sheetAPI.get<IPhoto[]>(
    "2dc50957-cba2-430e-b3b9-17536fc9fb6d/tabs/Feature_Photos"
  );
  return resp.data;
};
