const express = require("express");
const router = express.Router();
//without auth
//TODO: with auth

/* //Codes:
200: OK
401: Unauthorized
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
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2011-03-01T13:00:00Z",
    content: "Global Post 1", //UTF-8
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "ec86d5c4-f5b1-4c3d-9be9-fd1c866f96d3",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 2", //UTF-8
    picture: {
      url: "",
      width: 123, //int
      height: 123, //int
    }, //optional
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "07d3884e-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 3", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "1c2f1024-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 4", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "23f0a0d4-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 5", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "2d681480-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 6", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "358d2df8-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 7", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },

  {
    postId: "3cd1e89c-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 8", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "4d4c728c-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 9", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "8571bdac-b4bd-11ee-a506-0242ac120002",
    author: {
      username: "test_name_01",
      nickname: "test_nickname_01",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Global Post 10", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "dc582e6c-abe2-4143-8f23-3d65279bc4f8",
    author: {
      username: "test_name_03",
      nickname: "test_nickname_03",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2007-03-01T13:00:00Z",
    content: "Global Post 11", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
];
const postsPersonal = [
  {
    postId: "7cb5bd82-b489-11ee-a506-0242ac120002",
    author: {
      username: "test_name_011",
      nickname: "test_nickname_011",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2011-03-01T13:00:00Z",
    content: "Personal Post 1", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional: "",
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "87aea4ec-b489-11ee-a506-0242ac120002",
    author: {
      username: "test_name_010",
      nickname: "test_nickname_0999",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2010-03-01T13:00:00Z",
    content: "Personal Post 2", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
  {
    postId: "8d33850e-b489-11ee-a506-0242ac120002",
    author: {
      username: "test_name_0301",
      nickname: "test_nickname_0301",
      picture: {
        url: "",
        width: 123, //int
        height: 123, //int
      }, //optional
    },
    creationDate: "2007-03-01T13:00:00Z",
    content: "Personal Post 3", //UTF-8
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 100, //meters
    },
    likes: 123,
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
          tag: 123445,
        }, //optional
      },
      content: "This is a post", //UTF-8
      creationDate: "datetime+UTC",
      location: {
        latitude: 0,
        longitude: 0,
        accuracy: 100, //meters
      },
    },
  },
];

router.get("/", (req, res) => {
  const postId = req.query.postId;
  const limit = req.query.limit;
  const feedType = req.query.feedType ? req.query.feedType : "global";
  //req -
  switch (errorSetter) {
    case 200:
      if (feedType == "global") {
        let startIndex = 0;
        if (postId) {
          startIndex = postsGlobal.findIndex((post) => post.postId === postId);
          if (startIndex == -1) {
            mockData = {
              records: [],
              pagination: {
                lastPostId: undefined,
                limit: limit,
                records: 0,
              },
            };
            res.status(200).json(mockData).send();
          }
          startIndex += 1;
        }
        if (startIndex !== -1) {
          // Einträge aus dem Array basierend auf startIndex und limit auslesen
          let postsForrecords = postsGlobal.slice(
            startIndex,
            startIndex + Number(limit)
          );
          if (postsForrecords.length > 0) {
            // Die postId des letzten ausgewählten Posts
            lastPostId = postsForrecords[postsForrecords.length - 1].postId;
          }
          mockData = {
            records: postsForrecords,
            pagination: {
              lastPostId: lastPostId,
              limit: limit,
              records: postsGlobal.length,
            },
          };
        }
      }
      if (feedType == "personal") {
        let startIndex = 0;
        if (postId) {
          startIndex = postsPersonal.findIndex(
            (post) => post.postId === postId
          );
          if (startIndex == -1) {
            mockData = {
              records: [],
              pagination: {
                lastPostId: undefined,
                limit: limit,
                records: 0,
              },
            };
            res.status(200).json(mockData).send();
          }
          startIndex += 1;
        }
        if (startIndex !== -1) {
          // Einträge aus dem Array basierend auf startIndex und limit auslesen
          let postsForrecords = postsPersonal.slice(
            startIndex,
            startIndex + limit
          );
          if (postsForrecords.length > 0) {
            // Die postId des letzten ausgewählten Posts
            lastPostId = postsForrecords[postsForrecords.length - 1].postId;
          }
          mockData = {
            records: postsForrecords,
            pagination: {
              lastPostId: lastPostId,
              limit: limit,
              records: postsPersonal.length,
            },
          };
        }
      }
      break;
    case 401:
      mockData = {
        error: {
          message: "The request is unauthorized. Please login to your account.",
          code: "ERR-014",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});

module.exports = router;
