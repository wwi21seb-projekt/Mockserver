const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
404: Not Found
401: Unauthorized
 */
let errorSetter = 200;
let body;
const tokenWithZeros =
  "0000000000000000000000000000000000000000000000000000000000000000";
const refreshToken =
  "REFRESH000000000000000000000000000000000000000000000000000000000";
let mockData;
// Beispiel-Endpunkt für Benutzer (/api/users)
router.post("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = { token: tokenWithZeros, refreshToken: refreshToken };
      break;
    case 404:
      mockData = { error: { code: 404, message: "User Not Found" } };
      break;
    case 401:
      mockData = { error: { code: 401, message: "Unauthorized" } };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
