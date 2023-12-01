const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");

//for user registration
router.post("/register", async (req, res) => {
  const { fname, email, password, cpassword } = req.body;

  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preuser = await userdb.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res
        .status(422)
        .json({ error: "password and confirm password do not match" });
    } else {
      const finalUser = new userdb({
        fname,
        email,
        password,
        cpassword,
      });

      //password hashing
      const storeData = await finalUser.save();
      res.status(201).json(storeData);

      
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error")
  }
});

module.exports = router;
