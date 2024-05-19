const express = require("express");
const router = express.Router();

/* //Codes:
200: Ok
401: Unauthorized

*/
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = {
        key: "",
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-014",
          message: "unauthorized",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
