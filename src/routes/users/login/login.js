const express = require("express");
const router = express.Router();

/* //Codes:
200: successfull login
401: Unauthorized
404: User Not Found
403: Forbidden
 */
let errorSetter = 401;
const tokenWithZeros = "0000000000000000000000000000000000000000000000000000000000000000";
const refreshToken = "REFRESH000000000000000000000000000000000000000000000000000000000";
let mockData;

// Beispiel-Endpunkt für Benutzer (/api/users)
router.post("/", (req, res) => {
  switch (errorSetter) {
    case 200:
      mockData = { token: tokenWithZeros, refreshToken: refreshToken };
      break;
    case 404:
      mockData = {error: { code: 404, message: "User Not Found" }};
      break;
    case 401:
      mockData = {error: { code: 401, message: "Unauthorized" }};
      break;
    case 403:
      mockData = {error: { code: 403, message: "Forbidden" }};
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
