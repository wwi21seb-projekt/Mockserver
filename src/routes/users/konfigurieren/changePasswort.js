const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.patch("/", (req, res) => {
  //req - body = { oldPassword: , newPassword: } ?? Is this correct
  switch (errorSetter) {
    case 200:
      mockData = {};
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-001",
          message: "The request body is ...",
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
    case 403:
      mockData = {
        error: {
          code: "ERR-???",
          message: "forbidden - altes pw falsch",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
