import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const auth = new GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY,
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const spreadsheetId = process.env.SHEETS_ID;
    let range = "Newsletter!A2:A";
    const client = await auth.getClient();
    const service = google.sheets({ version: "v4", auth: client });
    const email = req.body;

    try {
      const result = await service.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          range,
          majorDimension: "ROWS",
          values: [[email]],
        },
      });
      res.status(200).json({ message: "success" });
      return result;
    } catch (err) {
      // TODO (Developer) - Handle exception
      res.json(err);
      throw err;
    }
  }
}
