const express = require("express");
const router = express.Router();

/* //Codes:
204: No content
*/
const errorSetter = 204;
let mockData;

// Beispiel-Endpunkt für Benutzer (/api/users)
router.delete("/", (req, res) => {
  switch (errorSetter) {
    case 204:
      break;
    case 208:
      mockData = {
        error: {
          message:
            "The user is already activated. Please login to your account.",
          code: "ERR-013",
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          message:
            "The user was not found. Please check the username and try again.",
          code: "ERR-004",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
