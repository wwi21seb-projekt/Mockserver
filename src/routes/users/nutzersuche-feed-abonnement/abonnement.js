const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.post("/", (req, res) => {
  //req - body = { following: ""}
  switch (errorSetter) {
    case 201:
      mockData = {
        subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
        follower: "test_user",
        following: "test_user_2",
        subscriptionDate: "Datetime+UTC",
      };
      break;
    case 409:
      mockData = {
        error: {
          code: "ERR-???",
          message: "conflict - already following",
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-???",
          message: "unauthorized",
        },
      };
      break;
    case 406:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Unacceptable",
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Bad request",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

router.get("/", (req, res) => {
  //parameter type (follower, following), offset (Default 0), limit (Default 10)

  const type = req.query.type;
  const offset = req.query.offset;
  const limit = req.query.limit;

  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
          {
            subscriptionId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            subscriptionDate: "Datetime+UTC",
            user: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "test_user",
            },
          },
        ],
        pagination: {
          offset: 0,
          limit: 10,
          records: 15,
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-014",
          message: "unauthorized",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
