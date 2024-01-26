const express = require("express");
const { token, refreshToken } = require("../../../staticData/tokens");
const router = express.Router();

/* //Codes:
200: successfull login
401: Unauthorized
404: User Not Found
403: Forbidden
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
          message:
            "The credentials are invalid. Please check the credentials and try again.",
          code: "ERR-008",
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
