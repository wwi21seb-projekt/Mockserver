const express = require("express");
const router = express.Router();

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;
const Posts = [
  {
    postId: "eb8cc60e-6a1e-42fc-8c35-61122bfdc04b",
    creationDate: "2012-03-01T13:00:00Z",
    content: "My first post!!!",
    location: {
      latitude: 50.09,
      longitude: 8.8,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1975-4b55-b3bd-59658fb8ae37",
    creationDate: "2012-03-07T13:00:00Z",
    content: "Oha wow. ",
    location: {
      latitude: 49.48,
      longitude: 8.44,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1975-4b55-b3bd-59638fb8ae38",
    creationDate: "2007-03-07T13:00:00Z",
    content: "Hello World! ",
    location: {
      latitude: 49.48,
      longitude: 8.44,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1975-4b55-b3bd-59658f43fe39",
    creationDate: "2007-03-06T13:00:00Z",
    content: "Test Post",
    location: {
      latitude: 42.69,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c344f-1975-4b55-b3bd-59658fb8ae47",
    creationDate: "2007-03-05T13:00:00Z",
    content: "Baum",
    location: {
      latitude: 42.69,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1985-4b55-b3bd-59658fb8ae57",
    creationDate: "2007-03-04T13:00:00Z",
    content: "Endlich den Bachelortitel!! #NieWiederDHBW",
    location: {
      latitude: 42.69,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1175-4b55-b3bd-59658fb8ae67",
    creationDate: "2012-03-03T13:00:00Z",
    content: "Ich will nach Hause. #DHBW",
    location: {
      latitude: 49.48,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1985-4b55-b3bd-59658fb8ae77",
    creationDate: "2016-03-02T13:00:00Z",
    content: "Schaltet die Ampel endlich ab!!!!",
    location: {
      latitude: 49.48,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1985-4b55-b3bd-59612fb8ae87",
    creationDate: "2007-03-04T13:00:00Z",
    content: "Das Haus ist Blau",
    location: {
      latitude: 42.69,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1175-4b55-b3bd-5de58fb8ae97",
    creationDate: "2012-03-03T13:00:00Z",
    content: "Ich hab Hunger!",
    location: {
      latitude: 42.69,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
  {
    postId: "e24c5b4f-1985-4b55-b3bd-59cf8fb8ae54",
    creationDate: "2016-03-02T13:00:00Z",
    content:
      "Vegetarismus ist keine Lösung! #FleischIstMeinGemüse #FürDieViehzucht",
    location: {
      latitude: 42.69,
      longitude: 23.32,
      accuracy: 100, //meters
    },
  },
];

router.get("/", (req, res) => {
  const offset = parseInt(req.query.offset); 
  const limit = parseInt(req.query.limit);
  //req -
  switch (errorSetter) {
    case 200:
      postsForrecords = Posts.slice(offset, offset + limit);
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
          message:
            "The user was not found. Please check the username and try again.",
          code: "ERR-004",
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
