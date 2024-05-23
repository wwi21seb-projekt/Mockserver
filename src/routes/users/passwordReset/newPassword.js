const express = require("express");
const router = express.Router();

/* //Codes:
204: No Content
400: Bad Request
403: Forbidden
404: Not Found
*/
const errorSetter = 204;
let mockData;

// Beispiel-Endpunkt für Benutzer (/api/users)
router.patch("/", (req, res) => {
  /*
        body: {
            newPassword: string,
            token: string (6-stelliger Code)
        }
    */
  switch (errorSetter) {
    case 204:
      break;
    case 403:
      mockData = {
        error: {
          message:
            "The token is invalid. Please check the token and try again.",
          code: "ERR-004",
        },
      };
      mockData = {
        error: {
          message:
            "The token is invalid for the user. Please check the token and try again.",
          code: "ERR-???",
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          message:
            "The user was not found. Please check the username and try again.",
          code: "ERR-???",
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          message:
            "The request body is invalid. Please check the request body and try again.",
          code: "ERR-004",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
