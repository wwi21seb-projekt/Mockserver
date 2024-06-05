const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
401: Unauthorized
404: Not Found
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = {
        username: "test_user",
        nickname: "test_user_nickname",
        status:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquy", //UTF-8, 128 Zeichen
        picture: {
          url: "",
          width: 123, //int
          height: 123, //int
          tag: 123445,
        }, //optional
        follower: 123,
        following: 3467,
        posts: 23,
        subscriptionId: "", // null or value of description
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
    case 401:
      mockData = {
        error: {
          message: "The request is unauthorized. Please login to your account.",
          code: "ERR-014",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
