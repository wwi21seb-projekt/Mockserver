const express = require("express");
const router = express.Router();

/* //Codes:
204: No content
400: Bad Request
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
          message: "Post not found",
          code: "ERR-XXX",
        },
      };
      break;
    case 409:
      mockData = {
        error: {
          message: "Conflict",
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
