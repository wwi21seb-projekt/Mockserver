const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
400: Bad Request
401: Unauthorized
 */
let errorSetter = 200;
let mockData;

const user = [
  {
    username: "test_user",
    nickname: "test_user_nickname",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user2",
    nickname: "test_user_nickname2",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user3",
    nickname: "test_user_nickname3",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user4",
    nickname: "test_user_nickname4",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user5",
    nickname: "test_user_nickname5",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user6",
    nickname: "test_user_nickname6",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user7",
    nickname: "test_user_nickname7",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user8",
    nickname: "test_user_nickname",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user9",
    nickname: "test_user_nickname9",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user10",
    nickname: "test_user_nickname10",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user11",
    nickname: "test_user_nickname11",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
  {
    username: "test_user12",
    nickname: "test_user_nickname12",
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
  },
];

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
          records: user.length,
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
          message: "The request is unauthorized. Please login to your account.",
          code: "ERR-014",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
