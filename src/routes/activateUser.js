const express = require("express");
const router = express.Router();

/* //Codes:
204: No content
404: Not Found
401: Unauthorized
 */
let errorSetter = 204;
let body;
// Beispiel-Endpunkt für Benutzer (/api/users)
router.post("/", (req, res) => {
  switch (errorSetter) {
    case 204:
      body = { code: 204 };
      break;
    case 404:
      body = { code: 404, message: "User Not Found" };
      break;
    case 401:
      body = { code: 401, message: "Unauthorized" };
      break;
  }

  res.status(body.code);

  if (errorSetter != 204) {
    const mockData = { error: body };
    res.json(mockData);
  }

  res.send();
});

module.exports = router;
