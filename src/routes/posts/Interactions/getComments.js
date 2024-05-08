const express = require("express");
const router = express.Router();

/* //Codes:
201: No content
400: Bad Request
401: Unauthorized
409: Conflict
 */
let errorSetter = 201;
let mockData;

router.get("/", (req, res) => {
  /*
      limit und offset wie user suche
  */
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            commentId: "",
            content: "",
            author: {
              username: "",
              nickname: "",
              profilePictureURL: "",
            },
            creationDate: "2007-03-04T13:00:00Z",
          },
        ],
        pagination: {
          offset: offset,
          limit: limit,
          records: user.length,
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
