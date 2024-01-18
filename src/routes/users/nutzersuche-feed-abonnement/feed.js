const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;
const Posts = [
  {
    "postId": "eb8cc60e-6a1e-42fc-8c35-61122bfdc04b",
    "creationDate": "2012-03-01T13:00:00Z",
    "content": "My first post!!!"
  },
  {
    "postId": "e24c5b4f-1975-4b55-b3bd-59658fb8ae37",
    "creationDate": "2012-03-07T13:00:00Z",
    "content": "Oha wow. "
  }
  , {
    "postId": "e24c5b4f-1975-4b55-b3bd-59638fb8ae37",
    "creationDate": "2007-03-07T13:00:00Z",
    "content": "Hello World! "
  }, {
    "postId": "e24c5b4f-1975-4b55-b3bd-59658f43fe37",
    "creationDate": "2007-03-06T13:00:00Z",
    "content": "Test Post"
  }, {
    "postId": "e24c344f-1975-4b55-b3bd-59658fb8ae37",
    "creationDate": "2007-03-05T13:00:00Z",
    "content": "Baum"
  }, {
    "postId": "e24c5b4f-1985-4b55-b3bd-59658fb8ae37",
    "creationDate": "2007-03-04T13:00:00Z",
    "content": "Endlich den Bachelortitel!! #NieWiederDHBW"
  }, {
    "postId": "e24c5b4f-1175-4b55-b3bd-59658fb8ae37",
    "creationDate": "2012-03-03T13:00:00Z",
    "content": "Ich will nach Hause. #DHBW"
  }, {
    "postId": "e24c5b4f-1985-4b55-b3bd-59658fb8ae37",
    "creationDate": "2016-03-02T13:00:00Z",
    "content": "Schaltet die Ampel endlich ab!!!!"
  }, {
    "postId": "e24c5b4f-1985-4b55-b3bd-59612fb8ae37",
    "creationDate": "2007-03-04T13:00:00Z",
    "content": "Das Haus ist Blau"
  }, {
    "postId": "e24c5b4f-1175-4b55-b3bd-5de58fb8ae37",
    "creationDate": "2012-03-03T13:00:00Z",
    "content": "Ich hab Hunger!"
  }, {
    "postId": "e24c5b4f-1985-4b55-b3bd-59cf8fb8ae37",
    "creationDate": "2016-03-02T13:00:00Z",
    "content": "Vegetarismus ist keine Lösung! #FleischIstMeinGemüse #FürDieViehzucht"
  }
]

router.get("/", (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;
  //req -
  switch (errorSetter) {
    case 200:
      console.log("offset: " + offset);
      console.log("limit: " + limit);
      console.log(Number(offset) + Number(limit))
      postsForrecords = Posts.slice(offset, Number(offset) + Number(limit));
      console.log(postsForrecords);
      mockData = {
        records: postsForrecords,
        pagination: {
          limit: limit,
          offset: offset,
          records: Posts.length,
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          code: "ERR-??",
          message: "Not found",
        },
      };
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-??",
          message: "Unauthorized",
        },
      };
      break;
    case 400:
      mockData = {
        error: {
          code: "ERR-??",
          message: "Bad Request",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
