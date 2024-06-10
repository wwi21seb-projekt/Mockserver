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

router.post("/", (req, res) => {
  switch (errorSetter) {
    case 201:
      const subscription = req.body.subscription;
      console.log("subscription", subscription);

      webpush.setVapidDetails(
        "mailto:example@yourdomain.org",
        PUBLIC_VAPID_KEY,
        PRIVATE_VAPID_KEY
      );

      // Senden Sie eine Push-Benachrichtigung nach 10 Sekunden
      setTimeout(() => {
        const payload = JSON.stringify({
          notificationId: "866bea46-e71b-4c68-a67c-c34a0908b4ef",
          timestamp: "2024-05-18T17:21:22+00:00",
          notificationType: "follow", // follow, repost,
          user: {
            username: "tina",
            nickname: "titi",
            picture: {
              url: "",
              width: 123, //int
              height: 123, //int
            }, //optional
          },
        });

        webpush.sendNotification(subscription, payload).catch((error) => {
          console.error(error.stack);
        });

        console.log("Push notification sent");
      }, 1000);

      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-014",
          message: "The request is unauthorized. Please login to your account.",
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-001",
          message:
            "The request body is invalid. Please check the request body and try again.",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
