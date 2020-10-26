var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    test1: {
      type: Number,
      trim: true,
      default: 0,
    },
    test2: {
      type: Number,
      trim: true,
      default: 0,
    },
    test3: {
      type: Number,
      trim: true,
      default: 0,
    },
    total: {
      type: Number,
      trim: true,
      default: 0,
    },
    average: {
      type: Number,
      trim: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
