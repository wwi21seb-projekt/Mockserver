const express = require("express");
const router = express.Router();

/* //Codes:
201: Created
400: Bad Request
401: Unauthorized
404: Not found
 */
let errorSetter = 401;
let mockData;

router.post("/", (req, res) => {
  /* req.body = { "content": "",
                  "picture": "", //optional, base64 encoded, leerer String = nicht vorhanden
                  "location": 
                      {
                        "latitude": 0,
                        "longitude": 0,
                        "accuracy": 100, //meters 
                      } //optional, wenn nicht angegeben, dann keine Location
                  repostedPostId: "3adf32ac-90b4-4aae-a6d2-a979938d5dcd" //optional
                } */
  // text ohne bild, bild ohne text, beides über contenttype application/json oder multipart/form-data
  switch (errorSetter) {
    case 201:
      mockData = {
        postId: "3adf32ac-90b4-4aae-a6d2-a979938d5dcd",
        author: {
          username: "test_user",
          nickname: "test_user",
          picture: {
            url: "",
            width: 123, //int
            height: 123, //int
          }, //optional
        },
        creationDate: "2024-05-01T13:00:00",
        content: "This is a post", //UTF-8
        picture: {
          url: "",
          width: 123, //int
          height: 123, //int
          tag: 123445,
        }, //optional
        likes: 123,
        comments: 12,
        liked: false,
        likes: 123,
        comments: 12,
        liked: false,
        repost: {
          //optional
          author: {
            username: "test_user",
            nickname: "test_user",
            picture: {
              url: "",
              width: 123, //int
              height: 123, //int
            }, //optional
          },
          content: "This is a post", //UTF-8
          creationDate: "2024-05-01T13:00:00",
          location: {
            latitude: 0,
            longitude: 0,
            accuracy: 100, //meters
          },
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-001",
          message:
            "The request body is invalid. Please check the request body and try again.",
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
            "The post was not found. Please check the postId and try again.",
          code: "ERR-020",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
