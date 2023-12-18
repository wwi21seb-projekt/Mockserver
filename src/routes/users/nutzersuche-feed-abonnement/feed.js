const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;
  //req -
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            postId: "",
            creationDate: "",
            content: "",
          },
        ],
        pagination: {
          limit: 3,
          offset: 3,
          records: 2,
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          code: "ERR-??",
          message: "Not found",
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-??",
          message: "Unauthorized",
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-??",
          message: "Bad Request",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
