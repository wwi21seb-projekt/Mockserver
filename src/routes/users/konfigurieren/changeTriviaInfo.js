const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.put("/", (req, res) => {
  //req - body = { nickname: "", status: "" ,} // always give full information
  switch (errorSetter) {
    case 200:
      mockData = {
        nickname: "",
        status: "",
      };
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
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
