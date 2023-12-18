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
            postId: "eb8cc60e-6a1e-42fc-8c35-61122bfdc04b",
            creationDate: "2007-03-01T13:00:00Z",
            content: "My first post!!!",
          },
          {
            postId: "e24c5b4f-1975-4b55-b3bd-59658fb8ae37",
            creationDate: "2007-03-01T13:00:00Z",
            content: "Oha wow. ",
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
