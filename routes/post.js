const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

function result(succ, msg, details) {
  if (details) {
    return {
      success: succ,
      message: msg,
      data: details,
    };
  } else {
    return {
      success: succ,
      message: msg,
    };
  }
}

router.get('/', async (req, res)=>{
    try {
        const post = await Post.aggregate()
    }
})