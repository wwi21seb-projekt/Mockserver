const express = require("express");
const router = express.Router();

/* //Codes:
201: No content
400: Bad Request
401: Unauthorized
409: Conflict
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            commentId: "539328e8-8750-4f42-9d53-d31409877c33",
            content: "rterett",
            author: {
              username: "testtest",
              nickname: "test",
              profilePictureURL: "",
            },
            creationDate: "2007-03-04T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409873c33",
            content: "rfseefesfefs",
            author: {
              username: "testtest",
              nickname: "test",
              profilePictureURL: "",
            },
            creationDate: "2007-04-04T13:00:00Z",
          },{
            commentId: "539328e8-8750-4f42-9d53-d31403277c33",
            content: "rsdfdsggtgergt",
            author: {
              username: "testtesttest",
              nickname: "testasdf",
              profilePictureURL: "",
            },
            creationDate: "2007-03-05T13:00:00Z",
          }
        ],
        pagination: {
          offset: offset,
          limit: limit,
          records: 3,
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
    case 404:
      mockData = {
        error: {
          message: "Post not found",
          code: "ERR-XXX",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;