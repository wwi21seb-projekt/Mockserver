const express = require("express");
const router = express.Router();

/* //Codes:
200: Ok
401: Unauthorized
404: Not Found
*/
const errorSetter = 200;
let mockData;
const ownUser = "test_user";

// Beispiel-Endpunkt für Benutzer (/api/users)
router.get("/", (req, res) => {
  /*
        default params: {
            offset: 0, 
            limit: 10
    */
  switch (errorSetter) {
    case 200:
      // pagination
      mockData = {
        records: [
          {
            content: "Hallo", //256 Zeichen, utf8
            username: "timpaul",
            creationDate: "2021-06-01T12:00:00Z",
          },
          {
            content: "Hey", //256 Zeichen, utf8
            username: ownUser,
            creationDate: "2021-06-01T13:00:00Z",
          },
          {
            content: "Bei mir regnet es", //256 Zeichen, utf8
            username: "timpaul",
            creationDate: "2021-06-01T14:00:00Z",
          },
          {
            content: "Bei mir nicht", //256 Zeichen, utf8
            username: ownUser,
            creationDate: "2021-06-01T15:00:00Z",
          },
          {
            content: "Bei mir scheint die Sonne", //256 Zeichen, utf8
            username: ownUser,
            creationDate: "2021-06-01T16:00:00Z",
          },
        ],
        pagination: {
          offset: 0,
          limit: 10,
          records: 1,
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          message: "Not authorized",
          code: "ERR-???",
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          message: "Chat not found",
          code: "ERR-???",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
