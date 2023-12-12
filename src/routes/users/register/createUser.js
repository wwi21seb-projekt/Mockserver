const express = require("express");
const router = express.Router();

/* //Codes:
201: created
400: Bad Request
409: User already exists
422: Email already exists
 */
let errorSetter = 201;
let body;

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
      mockData = { error: { code: 400, message: "Bad Request" } };
      break;
    case 409:
      mockData = { error: { code: 409, message: "User already exists" } };
      break;
    case 422:
      mockData = { error: { code: 422, message: "Email invalid" } };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
