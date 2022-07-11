import { IRSVP } from "./types";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import sgMail from "@sendgrid/mail";

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

export const getEmail = async () => {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const spreadsheetId = process.env.SHEETS_ID;
  let range = "Forward!A2:A";

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

export const sendEmail = async (person: string, rsvp: boolean) => {
  sgMail.setApiKey(process.env.EMAIL_KEY!);
  const emails = await getEmail();
  const emails_m = emails.map((email) => {
    return email[0];
  });
  const msg = {
    to: emails_m, // Change to your recipient
    from: "albertyanalbert@gmail.com", // Change to your verified sender
    subject: rsvp ? "New event Signup" : "New newsletter signup",
    text: rsvp
      ? `${person} has signed up for an event`
      : `${person} has signed up to join the newsletter`,
    html: rsvp
      ? `<p>${person} has signed up for an event</p>`
      : `<p>${person} has signed up to join the newsletter</p>`,
  };
  await sgMail
    .send(msg)
    .then((res) => {
      console.log("Email sent");
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};
