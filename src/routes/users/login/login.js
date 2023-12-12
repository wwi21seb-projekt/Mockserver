const express = require("express");
const router = express.Router();

/* //Codes:
204: No content
401: Unauthorized
404: User Not Found
403: Forbidden
 */
let errorSetter = 401;
let body;
const tokenWithZeros =
  "0000000000000000000000000000000000000000000000000000000000000000";
// Beispiel-Endpunkt für Benutzer (/api/users)
router.post("/", (req, res) => {
  switch (errorSetter) {
    case 204:
      body = { code: 204 };
      res.header("Authorization", `Bearer ${tokenWithZeros}`);
      break;
    case 404:
      body = { code: 404, message: "User Not Found" };
      break;
    case 401:
      body = { code: 401, message: "Unauthorized" };
      break;
    case 403:
      body = { code: 403, message: "Forbidden" };
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
