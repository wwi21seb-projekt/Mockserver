const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

const user = [
  {
    username: "test_user",
    nickname: "test_user_nickname",
    profilePictureUrl: "",
  },{
    username: "test_user2",
    nickname: "test_user_nickname2",
    profilePictureUrl: "",
  },{
    username: "test_user3",
    nickname: "test_user_nickname3",
    profilePictureUrl: "",
  },{
    username: "test_user4",
    nickname: "test_user_nickname4",
    profilePictureUrl: "",
  },{
    username: "test_user5",
    nickname: "test_user_nickname5",
    profilePictureUrl: "",
  },{
    username: "test_user6",
    nickname: "test_user_nickname6",
    profilePictureUrl: "",
  },{
    username: "test_user7",
    nickname: "test_user_nickname7",
    profilePictureUrl: "",
  },{
    username: "test_user8",
    nickname: "test_user_nickname",
    profilePictureUrl: "",
  },{
    username: "test_user9",
    nickname: "test_user_nickname9",
    profilePictureUrl: "",
  },{
    username: "test_user10",
    nickname: "test_user_nickname10",
    profilePictureUrl: "",
  },{
    username: "test_user11",
    nickname: "test_user_nickname11",
    profilePictureUrl: "",
  },{
    username: "test_user12",
    nickname: "test_user_nickname12",
    profilePictureUrl: "",
  }
]

router.get("/", (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;
  const username = req.query.username;
  switch (errorSetter) {
    case 200:
      mockData = {
        records: user.slice(offset, offset + limit),
        pagination: {
          offset: offset,
          limit: limit,
          records: user.slice(offset, offset + limit).length,
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
