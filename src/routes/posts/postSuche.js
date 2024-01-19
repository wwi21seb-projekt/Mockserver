router.get("/", (req, res) => {
  //parameter postId, limit, q (hashtag) )
  const postId = req.query.postId;
  const limit = req.query.limit;
  const q = req.query.q;

  switch (errorSetter) {
    case 200:
      mockData = {
        records: [
          {
            postId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
            author: {
              username: "test_user",
              nickname: "test_user",
              profilePictureURL: "",
            },
            creationDate: "Datetime+UTC",
            content: "Hallo Welt!",
          },
        ],
        pagination: {
          lastPostId: "cca86a3d-9870-4199-b9b8-970b4bc6ebbb",
          limit: 10,
          records: 1,
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
