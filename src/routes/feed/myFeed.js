const express = require("express");
const router = express.Router();
//without auth
//TODO: with auth

/* //Codes:
200: OK
 */
let errorSetter = 200;
let mockData;
let lastPostId;
const postsGlobal = [
  {
    postId: "48feb1ac-3b77-42be-a42c-ca1ebfceb983",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2011-03-01T13:00:00Z",
    content: "Global Post 1" //UTF-8
  },
  {
    postId: "ec86d5c4-f5b1-4c3d-9be9-fd1c866f96d3",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 2" //UTF-8
  },
  {
    postId: "07d3884e-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 3" //UTF-8
  },
  {
    postId: "1c2f1024-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 4" //UTF-8
  },
  {
    postId: "23f0a0d4-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 5" //UTF-8
  },
  {
    postId: "2d681480-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 6" //UTF-8
  },
  {
    postId: "358d2df8-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 7" //UTF-8
  },

  {
    postId: "3cd1e89c-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 8" //UTF-8
  },
  {
    postId: "4d4c728c-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 9" //UTF-8
  },
  {
    postId: "8571bdac-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 10" //UTF-8
  },
  {
    postId: "dc582e6c-abe2-4143-8f23-3d65279bc4f8",
    author: {
      username: "test_name_03",
      nickname: "test_nickname_03",
      profilePictureUrl: ""
    },
    creationDate: "2007-03-01T13:00:00Z",
    content: "Global Post 11" //UTF-8
  }

]
const postsPersonal = [
  {
    postId: "7cb5bd82-b489-11ee-a506-0242ac120002",
    author: {
      username: "test_name_011",
      nickname: "test_nickname_011",
      profilePictureUrl: ""
    },
    creationDate: "2011-03-01T13:00:00Z",
    content: "Personal Post 1" //UTF-8
  },
  {
    postId: "87aea4ec-b489-11ee-a506-0242ac120002",
    author: {
      username: "test_name_010",
      nickname: "test_nickname_0999",
      profilePictureUrl: ""
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Personal Post 2" //UTF-8
  },
  {
    postId: "8d33850e-b489-11ee-a506-0242ac120002",
    author: {
      username: "test_name_0301",
      nickname: "test_nickname_0301",
      profilePictureUrl: ""
    },
    creationDate: "2007-03-01T13:00:00Z",
    content: "Personal Post 3" //UTF-8
  }

]

router.get("/", (req, res) => {
  const postId = req.query.postId;
  const limit = req.query.limit;
  const feedType = req.query.feedType? req.query.feedType : 'global';
  //req -
  switch (errorSetter) {
    case 200:
      if (feedType == 'global') {
        let startIndex = 0;
        console.log("postId: " + postId);
        if (postId) {
          startIndex = postsGlobal.findIndex(post => post.postId === postId);
          if (startIndex == -1) {
            mockData = {
              records: [],
              pagination: {
                lastPostId: undefined,
                limit: limit,
                records: 0
              }
              
            }
            res.status(200).json(mockData).send();
          }
          startIndex += 1;
        }
        if (startIndex !== -1) {
          // Einträge aus dem Array basierend auf startIndex und limit auslesen
          let postsForrecords = postsGlobal.slice(startIndex, startIndex + Number(limit));
          if (postsForrecords.length > 0) {
            // Die postId des letzten ausgewählten Posts
            lastPostId = postsForrecords[postsForrecords.length - 1].postId;
          }
          mockData = {
            records: postsForrecords,
            pagination: {
              lastPostId: lastPostId,
              limit: limit,
              records: postsForrecords.length
            }
          };
        }

      }
      if (feedType == 'personal') {
        let startIndex = 0;
        if (postId) {
          startIndex = postsPersonal.findIndex(post => post.postId === postId);
          if (startIndex == -1) {
            mockData = {
              records: [],
              pagination: {
                lastPostId: undefined,
                limit: limit,
                records: 0
              }
              
            }
            res.status(200).json(mockData).send();
          }
          startIndex += 1;
        }
        if (startIndex !== -1) {
          // Einträge aus dem Array basierend auf startIndex und limit auslesen
          let postsForrecords = postsPersonal.slice(startIndex, startIndex + limit);
          if (postsForrecords.length > 0) {
            // Die postId des letzten ausgewählten Posts
            lastPostId = postsForrecords[postsForrecords.length - 1].postId;
          }
          mockData = {
            records: postsForrecords,
            pagination: {
              lastPostId: lastPostId,
              limit: limit,
              records: postsForrecords.length
            }
          };
        }
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
