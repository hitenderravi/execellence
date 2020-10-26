const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  getScore,
  getScore2,
  getScore3,
  getHighest,
  getAverage,
} = require("../controllers/user");

//get user by id
router.param("userId", getUserById); //middleware
router.get("/user/:userId", getUser);
router.get("/user/:userId/test1", getScore);
router.get("/user/:userId/test2", getScore2);
router.get("/user/:userId/test3", getScore3);

router.get("/users/highest", getHighest);
router.get("/users/average", getAverage);

module.exports = router;
