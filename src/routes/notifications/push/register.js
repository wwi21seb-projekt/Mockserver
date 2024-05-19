const express = require("express");
const webpush = require("web-push");
const router = express.Router();
require("dotenv").config();
const PUBLIC_VAPID_KEY = process.env.PUBLIC_VAPID_KEY;
const PRIVATE_VAPID_KEY = process.env.PRIVATE_VAPID_KEY;

/* //Codes:
200: Ok
400: Bad request
401: Unauthorized

*/
let errorSetter = 201;
let mockData;
const mockPushNotification = false;

router.post("/", (req, res) => {
  switch (errorSetter) {
    case 201:
      const subscription = req.body;

      webpush.setVapidDetails(
        "mailto:example@yourdomain.org",
        PUBLIC_VAPID_KEY,
        PRIVATE_VAPID_KEY
      );

      // Senden Sie eine Push-Benachrichtigung nach 10 Sekunden
      setTimeout(() => {
        const payload = JSON.stringify({ title: "Push-Benachrichtigung" });

        webpush.sendNotification(subscription, payload).catch((error) => {
          console.error(error.stack);
        });

        console.log("Push notification sent");
      }, 10000);

      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-014",
          message: "unauthorized",
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Bad request",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
