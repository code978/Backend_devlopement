const express = require('express')
const router = express.Router();
const User = require('../models/admin')
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get('/',(req,res)=>{
  res.send('<h1>You in admin login page.</h1>');
})

router.get("/login", (req, res) => {
    res.render("dashboard/login");
});

router.get("/register", async (req, res) => {
    const user = await User.findOne({});
    if (user) {
      return res.redirect("/dashboard/login");
    }
    res.render("dashboard/register");
});

router.post("/login", passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/dashboard/login",
    })
);

router.post("/register", async (req, res) => {
    const { fullname, email, password,location } = req.body;
    const new_user = new User({
      fullname,
      email,
      password,
      location,
      date:new Date()
    });
  
    const salt = await bcrypt.genSalt(10);
    new_user.password = await bcrypt.hash(new_user.password, salt);
  
    await new_user.save();
    res.redirect("/dashboard");
});

router.get('/logout',async (req,res)=>{
    const date = new Date();
    await User.save(date);
    req.logout();
    res.redirect('/');
})

module.exports = router