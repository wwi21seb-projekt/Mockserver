const express = require("express");
const router = express.Router();

/* //Codes:
204: No Content
401: Unauthorized
404: Not Found
403: Forbidden
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
          code: "ERR-014",
          message: "unauthorized",
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          message:
            "The notification was not found. Please check the notification ID and try again.",
          code: "ERR-023",
        },
      };
      break;
    case 403:
      mockData = {
        error: {
          message: "You can only delete your own notifications.",
          code: "ERR-019",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
