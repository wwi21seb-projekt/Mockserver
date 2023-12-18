const express = require("express");
const router = express.Router();
//without auth
//TODO: with auth

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  const postId = req.query.postId;
  const limit = req.query.limit;
  const feedType = req.query.feedType;
  //req -
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            postId: "uuid",

            other: "I dont know Kevin was too fast",
          },
        ],
        pagination: {
          lastPostId: "uuid of last included post",
          limit: 0,
          records: 0,
        },
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
    case 404:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Not Found",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
