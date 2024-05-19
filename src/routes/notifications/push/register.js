const express = require("express");
const router = express.Router();

/* //Codes:
200: Ok
400: Bad request
401: Unauthorized

*/
let errorSetter = 200;
let mockData;

router.push("/", (req, res) => {
  switch (errorSetter) {
    case 201:
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-014",
          message: "unauthorized",
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

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
