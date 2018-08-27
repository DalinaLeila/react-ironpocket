const express = require("express");
const passport = require('passport');
const authRoutes = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({message: 'Something went wrong'});
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({message: 'Something went wrong'});
        return;
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});


authRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  if (username === "" || password === "") {
    res.status(401).json({message: "Indicate username and password"});
    return;
  }
  User.findOne({username})
  .then(user => {
    if (user !== null) {
      res.status(401).json({message: "The username already exists"});
      return;
    } else {
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = new User({username, name, password: hashPass});
      newUser.save()
      .then(user => {
        req.login(user, (err) => {
          if (err) {
            res.status(500).json({message: 'Something went wrong'});
            return;
          }
          res.status(200).json(req.user);
        });
      })
      .catch((err) => {
        res.status(401).json({message: "Something went wrong"});
      })
    }
  })
});

authRoutes.get('/loggedin', (req, res, next) => {
  console.log(req.user)
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
});

authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = authRoutes;
