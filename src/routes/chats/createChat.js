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
          code: "ERR-001",
          message:
            "The request body is invalid. Please check the request body and try again.",
        },
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
    case 404:
      mockData = {
        error: {
          message:
            "The user was not found. Please check the username and try again.",
          code: "ERR-404",
        },
      };
      break;
    case 409:
      mockData = {
        error: {
          message:
            "The chat already exists. Please check the username and try again.",
          code: "ERR-026",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
