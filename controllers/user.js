// const user = require("../models/user");
const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    console.log(user);
    next();
  });
};

exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

exports.getScore = (req, res) => {
  let x = Math.floor(Math.random() * Math.floor(10));
  cuser = req.profile;
  cuser.test1 = x;
  cuser.save();
  return res.status(200).json({
    message: `Test completed succesfully you got ${x} number`,
  });
};
exports.getScore2 = (req, res) => {
  let x = Math.floor(Math.random() * Math.floor(10));
  cuser = req.profile;
  cuser.test2 = x;
  cuser.save();
  return res.status(200).json({
    message: `Test completed succesfully you got ${x} number`,
  });
};
exports.getScore3 = (req, res) => {
  let x = Math.floor(Math.random() * Math.floor(10));
  cuser = req.profile;
  cuser.test3 = x;
  // cuser.save();

  // total score code
  cuser.total = cuser.test1 + cuser.test2 + x;
  cuser.average = (cuser.test1 + cuser.test2 + x) / 2;
  cuser.save();
  return res.status(200).json({
    message: `Test completed succesfully you got ${x} number`,
  });
};

exports.getHighest = (req, res) => {
  User.find().exec((err, users) => {
    //find user in db
    if (err || !users) {
      return res.status(400).json({
        error: "USER email does not exist",
      });
    }
    var i = 0;
    var largest = 0;
    for (i = 0; i < users.length; i++) {
      if (users[i].total > largest) {
        largest = users[i].total;
        name = users[i].name;
      }
    }
    res.json(
      name + " got " + largest + "number which is highest among all students"
    );
  });
};

exports.getAverage = (req, res) => {
  User.find().exec((err, users) => {
    //find user in db
    if (err || !users) {
      return res.status(400).json({
        error: "USER email does not exist",
      });
    }
    var i = 0;
    var largest = 0;
    for (i = 0; i < users.length; i++) {
      if (users[i].average > largest) {
        average = users[i].average;
        name = users[i].name;
      }
    }
    res.json(
      name +
        " got " +
        average +
        " average number which is highest among all students"
    );
  });
};
