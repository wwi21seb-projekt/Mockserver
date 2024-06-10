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

router.post("/", (req, res) => {
  /*
        "commentId": "",
        "content": "", //max. 128 zeichen
    */
  switch (errorSetter) {
    case 201:
      mockData = {
        commentId: "",
        content: "",
        author: {
          username: "",
          nickname: "",
          picture: {
            url: "",
            width: 123, //int
            height: 123, //int
          }, //optional
        },
        creationDate: "2007-03-04T13:00:00Z",
      };
      break;
    case 400:
      mockData = {
        error: {
          message:
            "The request is invalid. Please check the request and try again.",
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
    case 404:
      mockData = {
        error: {
          message:
            "The post was not found. Please check the post ID and try again.",
          code: "ERR-020",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
