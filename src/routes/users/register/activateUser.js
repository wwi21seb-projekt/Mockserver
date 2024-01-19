const express = require("express");
const { token, refreshToken } = require("../../../staticData/tokens");
const router = express.Router();

/* //Codes:
200: OK
404: Not Found
401: Unauthorized
 */
let errorSetter = 200;
let mockData;

router.post("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = { token: token, refreshToken: refreshToken };
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
