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

router.get("/", (req, res) => {
  //parameter type (follower, following), offset (Default 0), limit (Default 10)

  const type = req.query.type;
  const offset = req.query.offset;
  const limit = req.query.limit;
  console.log(type, offset, limit);
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
          },
          {
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
          },
          {
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
          },
          {
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
          },
          {
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
          },
          {
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
          },
          {
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
          },
          {
            followerId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            followingId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            username: "test_user",
            nickname: "test_user",
            profilePictureURL: "test_user",
          },
        ],
        pagination: {
          offset: 0,
          limit: 10,
          records: 15,
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
