const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  //req -
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            username: "test_user",
            nickname: "test_user_nickname",
            profilePictureUrl: "",
          },
        ],
        pagination: {
          offset: 0,
          limit: 0,
          records: 0,
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-001",
          message: "The request body is ...", //falsche pagination info bsp. offset -1
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-???",
          message: "nicht angemeldet, darf nicht suchen",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
