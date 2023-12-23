const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
404: Not Found
401: Unauthorized
 */
let errorSetter = 200;
const tokenWithZeros =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const refreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
let mockData;

router.post("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = { token: tokenWithZeros, refreshToken: refreshToken };
      break;
    case 404:
      mockData = {
        error: {
          code: "ERR-007",
          message:
            "The token is invalid. Please check the token and try again.",
        },
      };
      break;
    /* case 404:
      mockData = {
        error: {
          code: "ERR-004",
          message:
            "The user was not found. Please check the username and try again.",
        },
      };
      break; */
    case 401:
      mockData = {
        error: {
          code: "ERR-006",
          message:
            "The token has expired. Please check your mail for a new token and try again.",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
