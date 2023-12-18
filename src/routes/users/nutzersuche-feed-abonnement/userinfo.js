const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = {
        username: "test_user",
        nickname: "test_user_nickname",
        status: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquy", //UTF-8, 128 Zeichen
        profilePictureUrl: "",
        follower: 123,
        following: 3467,
        posts: 23,
        subscriptionId: "", // null or value of description
      };
      break;
    case 404:
      mockData = {
        error: {
          code: "ERR-???",
          message: "not found",
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
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
