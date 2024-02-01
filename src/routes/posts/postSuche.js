const express = require("express");
const router = express.Router();

/* //Codes
200: OK
401: unauthorized
*/
let errorSetter = 200;
let mockData;

const posts = [
  {
    postId: "48feb1ac-3b77-42be-a42c-ca1ebfceb983",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: "",
    },
    creationDate: "2011-03-01T13:00:00Z",
    content: "Post 1", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
  },
  {
    postId: "48feb1ac-3b77-42be-a42c-ca1ebfceb984",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: "",
    },
    creationDate: "2011-03-01T13:00:00Z",
    content: "Past 1", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
  },
  {
    postId: "ec86d5c4-f5b1-4c3d-9be9-fd1c866f96d3",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: "",
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Suche nach mir Post 2", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
  },
  {
    postId: "07d3884e-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: "",
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Hier bin ich! post 3", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
  },
  {
    postId: "1c2f1024-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: "",
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Na da guckst du! WA?! Post 4", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
  },
  {
    postId: "23f0a0d4-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: "",
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Einfach nur nen langweiliger Post 5", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
  },
];

router.get("/", (req, res) => {
  //parameter postId, limit, q (hashtag) )
  const postId = req.query.postId;
  const limit = parseInt(req.query.limit, 10) || posts.length;
  const q = req.query.q;

  let offset = 0;
  if (postId) {
    const index = posts.findIndex((post) => post.postId === postId);
    if (index !== -1) {
      offset = index + 1;
    }
  }

  const results = q
    ? posts
        .filter((post) => post.content.toLowerCase().includes(q.toLowerCase()))
        .slice(offset, offset + limit)
    : [];

  const lastPostId =
    results.length > 0 ? results[results.length - 1].postId : null;

  switch (errorSetter) {
    case 200:
      mockData = {
        records: results,
        pagination: {
          lastPostId: lastPostId,
          limit: limit,
          records: posts.length,
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
