const express = require("express");
const { token, refreshToken } = require("../../staticData/tokens");
const router = express.Router();

let mockData;
let errorSetter = 201;

router.post("/", (req, res) => {
  switch (errorSetter) {
    case 201:
      mockData = {
        token: token,
        refreshToken: refreshToken,
      };
      break;
    case 404:
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
