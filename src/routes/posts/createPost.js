const express = require("express");
const router = express.Router();

/* //Codes:
201: created
400: Bad Request
401: Unauthorized
 */
let errorSetter = 201;
let mockData;

router.post("/", (req, res) => {
  /* req.body = { "content": "",
                  "location": 
                      {
                        "latitude": 0,
                        "longitude": 0,
                        "accuracy": 100, //meters 
                      } //optional, wenn nicht angegeben, dann keine Location
                } */
  // text ohne bild, bild ohne text, beides über contenttype application/json oder multipart/form-data
  switch (errorSetter) {
    case 201:
      mockData = {
        postId: "3adf32ac-90b4-4aae-a6d2-a979938d5dcd",
        author: {
          username: "test_user",
          nickname: "test_user",
          profilePictureUrl: "",
        },
        creationDate: "datetime+UTC",
        content: "This is a post", //UTF-8
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
          code: "ERR-???",
          message: "nicht angemeldet oder falscher token",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
