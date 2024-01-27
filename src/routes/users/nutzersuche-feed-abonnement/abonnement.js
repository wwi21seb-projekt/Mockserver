const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 201;
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
          message:
            "The subscription already exists. Please check the username and try again.",
          code: "ERR-016",
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
    case 406:
      mockData = {
        error: {
          message:
            "You cannot follow yourself. Please check the username and try again.",
          code: "ERR-017",
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          message:
            "The user was not found. Please check the username and try again.",
          code: "ERR-004",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
