const express = require("express");
const router = express.Router();
//without auth
//TODO: with auth

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  const postId = req.query.postId;
  const limit = req.query.limit;
  const feedType = req.query.feedType;
  //req -
  switch (errorSetter) {
    case 200:
      if (feedType == 'global') {
        mockData = {
          records: [
            {
              postId: "48feb1ac-3b77-42be-a40c-ca1ebfceb983",
              author: {
                username: "test_name_01",
                nickname: "test_nickname_01",
                profilePictureUrl: ""
              },
              creationDate: "2011-03-01T13:00:00Z",
              content: "This is the first post" //UTF-8
            },
            {
              postId: "ec86d5c4-f1b1-4c3d-9be9-fd1c866f96d3",
              author: {
                username: "test_name_01",
                nickname: "test_nickname_01",
                profilePictureUrl: ""
              },
              creationDate: "2010-03-01T13:00:00Z",
              content: "This is the secound post" //UTF-8
            },
            {
              postId: "dc582e6c-abe2-4143-8323-3d65279bc4f8",
              author: {
                username: "test_name_03",
                nickname: "test_nickname_03",
                profilePictureUrl: ""
              },
              creationDate: "2007-03-01T13:00:00Z",
              content: "This is the a post" //UTF-8
            }

          ],
          pagination: {
            lastPostId: "dc582e6c-abe2-4143-8323-3d65279bc4f8",
            limit: limit,
            records: 10
          }
        };
      }
      if (feedType == 'personal') {
        mockData = {
          records: [
            {
              postId: "fd9f0e4a-b1ef-11ee-a506-0242ac120002",
              author: {
                username: "test_name_01",
                nickname: "test_nickname_01",
                profilePictureUrl: ""
              },
              creationDate: "2011-03-01T13:00:00Z",
              content: "This is a personal feed" //UTF-8
            },
            {
              postId: "0ea097ca-b1f2-11ee-a506-0242ac120002",
              author: {
                username: "test_name_01",
                nickname: "test_nickname_01",
                profilePictureUrl: ""
              },
              creationDate: "2010-03-01T13:00:00Z",
              content: "Hello World" //UTF-8
            },
            {
              postId: "1774a1b6-b1f2-11ee-a506-0242ac120002",
              author: {
                username: "test_name_03",
                nickname: "test_nickname_03",
                profilePictureUrl: ""
              },
              creationDate: "2007-03-01T13:00:00Z",
              content: "This is the a post" //UTF-8
            }

          ],
          pagination: {
            lastPostId: "1cb98984-b1f2-11ee-a506-0242ac120002",
            limit: limit,
            records: 10
          }
        };
      }
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-001",
          message: "The request body is ...",
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
    case 404:
      mockData = {
        error: {
          code: "ERR-???",
          message: "Not Found",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
