import { IRSVP } from "./types";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export const getYoutubeLinks = async () => {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const spreadsheetId = process.env.SHEETS_ID;
  let range = "Links!A2:A";

  const client = await auth.getClient();

  const service = google.sheets({ version: "v4", auth: client });
  try {
    const result = await service.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range,
    });
    return result.data.values ? result.data.values : [];
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
};

export const getEvents = async () => {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const spreadsheetId = process.env.SHEETS_ID;
  let range = "Events!A2:C100";

  const client = await auth.getClient();

  const service = google.sheets({ version: "v4", auth: client });
  try {
    const result = await service.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range,
    });
    return result.data.values ? result.data.values : [];
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
};
