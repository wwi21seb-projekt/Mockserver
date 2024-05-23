const express = require("express");
const router = express.Router();

/* //Codes:
200: Ok
400: Bad request
401: Unauthorized
404: Not Found
409: Conflict
*/
const errorSetter = 200;
let mockData;

// Beispiel-Endpunkt für Benutzer (/api/users)
router.post("/", (req, res) => {
  /*
        body: {
            username: "",
            content: ""

        }
    */
  switch (errorSetter) {
    case 200:
      // pagination
      mockData = {
        chatId: "5af04939-7cd5-4bb8-aea1-60a6785188f3",
        content: "Hello", //256 Zeichen, utf8
        username: "timpaul",
        creationDate: "2021-06-01T12:00:00Z",
      };
      break;
    case 400:
      mockData = {
        error: {
          message: "Bad request",
          code: "ERR-???",
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          message: "Not authorized",
          code: "ERR-???",
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          message: "User not found",
          code: "ERR-???",
        },
      };
      break;
    case 409:
      mockData = {
        error: {
          message: "Chat already exists",
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
