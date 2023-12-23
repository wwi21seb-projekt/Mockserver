const express = require("express");
const router = express.Router();

/* //Codes:
200: successfull login
401: Unauthorized
404: User Not Found
403: Forbidden
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
          code: "ERR-004",
          message:
            "The user was not found. Please check the username and try again.",
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-008",
          message:
            "The credentials are invalid. Please check the credentials and try again.",
        },
      };
      break;
    case 403:
      mockData = {
        error: {
          code: "ERR-005",
          message:
            "The user is not activated. Please activate the user and try again.",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
