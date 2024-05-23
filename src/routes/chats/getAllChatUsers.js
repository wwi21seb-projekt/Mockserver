const express = require("express");
const router = express.Router();

/* //Codes:
200: Ok
401: Unauthorized
404: Not Found
*/
const errorSetter = 204;
let mockData;

// Beispiel-Endpunkt für Benutzer (/api/users)
router.get("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            chatId: "5af04939-7cd5-4bb8-aea1-60a6785188f3",
            user: {
              username: "timpaul",
              nickname: "TP",
              profilePictureUrl: "",
            },
          },
          {
            chatId: "6bf04939-7cd5-4bb8-aea1-60a6785188f4",
            user: {
              username: "johndoe",
              nickname: "JD",
              profilePictureUrl: "",
            },
          },
          {
            chatId: "7cf04939-7cd5-4bb8-aea1-60a6785188f5",
            user: {
              username: "janedoe",
              nickname: "JD",
              profilePictureUrl: "",
            },
          },
          {
            chatId: "8df04939-7cd5-4bb8-aea1-60a6785188f6",
            user: {
              username: "alexsmith",
              nickname: "AS",
              profilePictureUrl: "",
            },
          },
        ],
      };
      break;
    case 401:
      mockData = {
        error: {
          message:
            "Unauthorized. Please check the username and password and try again.",
          code: "ERR-???",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
