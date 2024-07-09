const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
401: Unauthorized
404: Not Found
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;
  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            commentId: "539328e8-8750-4f42-9d53-d31409877c33",
            content: "rterett",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-04T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409873c33",
            content: "rfseefesfefs",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-04-04T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31403277c33",
            content: "rsdfdsggtgergt",
            author: {
              username: "testtesttest",
              nickname: "testasdf",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409877c33",
            content: "rterett",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409873c33",
            content: "rfseefesfefs",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31403277c33",
            content: "rsdfdsggtgergt",
            author: {
              username: "testtesttest",
              nickname: "testasdf",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409877c33",
            content: "rterett",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409873c33",
            content: "rfseefesfefs",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31403277c33",
            content: "rsdfdsggtgergt",
            author: {
              username: "testtesttest",
              nickname: "testasdf",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409877c33",
            content: "rterett",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31409873c33",
            content: "rfseefesfefs",
            author: {
              username: "testtest",
              nickname: "test",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
          {
            commentId: "539328e8-8750-4f42-9d53-d31403277c33",
            content: "rsdfdsggtgergt",
            author: {
              username: "testtesttest",
              nickname: "testasdf",
              picture: {
                url: "",
                width: 123, //int
                height: 123, //int
              }, //optional
            },
            creationDate: "2024-05-05T13:00:00Z",
          },
        ],
        pagination: {
          offset: offset,
          limit: limit,
          records: 30,
        },
      };
      console.log(limit, offset);
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
            "The post was not found. Please check the postId and try again.",
          code: "ERR-020",
        },
      };
      break;
  }

  res.status(errorSetter);
  if (mockData) res.json(mockData);
  res.send();
});

module.exports = router;
