const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 204;
let mockData;

router.delete("/", (req, res) => {
  //req - body = { following: ""}
  switch (errorSetter) {
    case 204:
      break;
    case 404:
      mockData = {
        error: {
          message:
            "The subscription was not found. Please check the username and try again.",
          code: "ERR-015",
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
    case 403:
      mockData = {
        error: {
          message: "You can only delete your own subscriptions.",
          code: "ERR-018",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
