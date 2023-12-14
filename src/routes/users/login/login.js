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
  "0000000000000000000000000000000000000000000000000000000000000000";
const refreshToken =
  "REFRESH000000000000000000000000000000000000000000000000000000000";
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
