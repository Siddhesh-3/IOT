const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post("/adddata", async (req, res) => {
  const { temp, humidity, mostion, light, distance } = req.body;

  let user = new User({
    temp,
    humidity,
    motion,
    light,
    distance,
  });
  user = await user.save();
  res.json(user);
});

router.get("/getdata", async (req, res) => {
  const getdata = await User.findById(req.body._id);
  res.json(getdata);
});

module.exports = router;
