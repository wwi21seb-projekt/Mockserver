const express = require("express");
const router = express.Router();

/* //Codes:
201: created
400: Bad Request
409: User already exists
422: Email already exists
 */
let errorSetter = 201;
let mockData;

router.post("/", (req, res) => {
  switch (errorSetter) {
    case 201:
      mockData = {
        username: "test_name",
        nickname: "test name2", // optional
        email: "test@test.de",
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-001",
          message:
            "The request body is invalid. Please check the request body and try again.",
        },
      };
      break;
    case 409:
      mockData = {
        error: {
          code: "ERR-002",
          message:
            "The username is already taken. Please try another username.",
        },
      };
      break;
    case 409:
      mockData = {
        error: {
          code: "ERR-003",
          message: "The email is already taken. Please try another email.",
        },
      };
    case 422:
      mockData = {
        error: {
          code: "ERR-011",
          message:
            "The email is unreachable. Please check the email and try again.",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
