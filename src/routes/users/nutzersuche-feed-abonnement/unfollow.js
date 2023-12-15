const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.delete("/", (req, res) => {
  //req - body = { following: ""}
  switch (errorSetter) {
    case 204:
      break;
    case 404:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Subscription not found",
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-???",
          message: "unauthorized",
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Bad request",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
