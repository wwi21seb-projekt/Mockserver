const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.post("/", (req, res) => {
  //req - body = { following: ""}
  switch (errorSetter) {
    case 201:
      mockData = {
        subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
        follower: "test_user",
        following: "test_user_2",
        subscriptionDate: "Datetime+UTC",
      };
      break;
    case 409:
      mockData = {
        error: {
          code: "ERR-???",
          message: "conflict - already following",
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
    case 406:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Unacceptable",
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
