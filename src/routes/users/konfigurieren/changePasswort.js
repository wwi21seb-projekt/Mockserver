const express = require("express");
const router = express.Router();

/* //Codes:
204: OK
400: Bad Request
401: Unauthorized
403: Forbidden
 */
let errorSetter = 204;
let mockData;

router.patch("/", (req, res) => {
  //req - body = { oldPassword: , newPassword: } ?? Is this correct
  switch (errorSetter) {
    case 204:
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
          message: "The request is unauthorized. Please login to your account.",
          code: "ERR-014",
        },
      };
      break;
    case 403:
      mockData = {
        error: {
          message:
            "The credentials are invalid. Please check the credentials and try again.",
          code: "ERR-008",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
