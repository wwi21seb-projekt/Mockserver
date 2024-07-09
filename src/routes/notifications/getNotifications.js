const express = require("express");
const router = express.Router();
//without auth
//TODO: with auth

/* //Codes:
200: OK
401: Unauthorized
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  //req -
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            notificationId: "5af04939-7cd5-4bb8-aea1-60a6785188f3",
            timestamp: "2024-05-18T23:21:22+00:00",
            notificationType: "follow", // follow, repost,
            user: {
              username: "timpaul",
              nickname: "TP",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            notificationId: "866bea46-e71b-4c68-a67c-c34a0908b4ef",
            timestamp: "2024-05-18T17:21:22+00:00",
            notificationType: "repost", // follow, repost,
            user: {
              username: "tina",
              nickname: "titi",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            notificationId: "866bea46-e71b-4c68-a67c-c34a0908b357",
            timestamp: "2024-05-18T17:21:22+00:00",
            notificationType: "message", // follow, repost, message
            user: {
              username: "timpaul",
              nickname: "titi",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            notificationId: "866bea46-e71b-4c68-a67c-c34a0908b356",
            timestamp: "2024-05-18T07:21:22+00:00",
            notificationType: "repost", // follow, repost,
            user: {
              username: "tatiana",
              nickname: "tati",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            notificationId: "866bea46-e722b-4c68-a67c-c34a0908b356",
            timestamp: "2024-05-18T07:21:22+00:00",
            notificationType: "follow", // follow, repost,
            user: {
              username: "tatiana",
              nickname: "tati",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
        ],
      };

      break;
    case 401:
      mockData = {
        error: {
          message: "The request is unauthorized. Please login to your account.",
          code: "ERR-014",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
