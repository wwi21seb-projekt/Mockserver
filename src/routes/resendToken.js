const express = require("express");
const router = express.Router();

/* //Codes:
204: No content
*/

// Beispiel-Endpunkt für Benutzer (/api/users)
router.post("/", (req, res) => {
  res.status(204);
  res.send();
});

module.exports = router;