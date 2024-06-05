const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
400: Bad Request
401: Unauthorized
 */
let errorSetter = 200;
let mockData;

router.put("/", (req, res) => {
  //req - body = {
  //   nickname: "",
  //   status: "" ,
  //   picture: "" //optional base64 encoded, leerer String = LÖSCHEN, null = es passiert nichts
  // } // always give full information
  switch (errorSetter) {
    case 200:
      mockData = {
        nickname: "",
        status: "",
        picture: {
          url: "",
          width: 123, //int
          height: 123, //int
        }, //optional
      };
      break;
    case 400:
      mockData = {
        error: {
          message:
            "The request body is invalid. Please check the request body and try again.",
          code: "ERR-001",
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
