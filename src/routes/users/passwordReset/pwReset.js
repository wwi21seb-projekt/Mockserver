const express = require("express");
const router = express.Router();

/* //Codes:
200: Ok
404: Not Found
*/
const errorSetter = 200;
let mockData;

// Beispiel-Endpunkt für Benutzer (/api/users)
router.post("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = {
        email: "max.mustermann@gmail.com",
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
