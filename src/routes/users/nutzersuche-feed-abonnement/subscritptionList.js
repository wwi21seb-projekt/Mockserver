const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
400: Bad Request
401: Unauthorized
404: Not Found
 */
let errorSetter = 200;
let mockData;

const testAbos = [
  {
    followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
    followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
    username: "test_user1",
    nickname: "test_user",
    profilePictureURL: "test_user",
  },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user2",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user3",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user4",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user5",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user6",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user7",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user8",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user9",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user10",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user11",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user12",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user13",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user14",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user15",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user16",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user17",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user18",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user19",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user20",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "",
      username: "test_user21",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user22",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
    {
      followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
      username: "test_user23",
      nickname: "test_user",
      profilePictureURL: "test_user",
    },
  ]
  
router.get("/", (req, res) => {
  //parameter type (follower, following), offset (Default 0), limit (Default 10)

  const type = req.query.type;
  const offset = parseInt(req.query.offset) || 0; 
  const limit = parseInt(req.query.limit) || 10;
  // console.log(type, offset, limit);
  switch (errorSetter) {
    case 200:
      mockData = {
        records: testAbos.slice(offset, offset + limit),
        pagination: {
          offset: offset,
          limit: limit,
          records: testAbos.length, 
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          message:
            "The request body is invalid. Please check the request body and try again.",
          code: "ERR-001",
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
    case 404:
      mockData = {
        error: {
          message:
            "The user was not found. Please check the username and try again.",
          code: "ERR-004",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
