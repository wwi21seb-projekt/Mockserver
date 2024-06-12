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

router.delete("/", (req, res) => {
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
          message: "You can't unlike a post you haven't liked.",
          code: "ERR-022",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
