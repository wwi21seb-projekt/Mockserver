const express = require("express");
const router = express.Router();

/* //Codes:
204: No content
404: Not Found
401: Unauthorized
409: Conflict
 */
let errorSetter = 204;
let mockData;

router.post("/", (req, res) => {
  switch (errorSetter) {
    case 204:
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
    case 409:
      mockData = {
        error: {
          message: "You have already liked this post. You can't like it again.",
          code: "ERR-021",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
