const express = require("express");
const router = express.Router();

//post-records
const records = [
  {
    postId: "uuid",
    author: {
      username: "Username",
      nickname: "Nickname",
      profilePictureUrl: ""
    },
    creationDate: "2024-01-05T18:11:55.803Z",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
  },
  // Copy the same entry 9 more times
  ...Array(9).fill({
    postId: "uuid",
    author: {
      username: "Username",
      nickname: "Nickname",
      profilePictureUrl: ""
    },
    creationDate: "2024-01-05T18:11:55.803Z",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
  })
];

//without auth
//TODO: with auth

/* //Codes:
200: OK
400: BadRequest
401: Unauthorized
404: Post not found
 */
let errorSetter = 200;
let mockData;

router.get("/", (req, res) => {
  //req -
  switch (errorSetter) {
    case 200:
      if ( req.query.postId !== "0" && req.query.postId !== "lastUUID" )
      {
        mockData = {
        error: {
          code: "ERR-???",
          message: "Invalid POSTID (First ID must be 0. The one after that must be lastUUID.",
        },}
        res.status(400).json(mockData).send();
        return;
      }
      else if(!req.query.limit)
      {
        mockData = {
          error: {
            code: "ERR-???",
            message: "Invalid LIMIT ",
          },}
          res.status(400).json(mockData).send();
          return;
      }
      else if(req.query.feedType !== "global" && req.query.feedType !== "personal" )
      {
        mockData = {
          error: {
            code: "ERR-???",
            message: "Invalid Type ",
          },}
          res.status(400).json(mockData).send();
          return;
      }
      mockData = {
        records: records,
        pagination: {
          lastPostId: "lastUUID",
          limit: 10,
          records: 10,
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-???",
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
