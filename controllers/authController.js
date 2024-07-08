const bcrypt = require("bcrypt");
const User = require("../models/User");

// exports.landing_page = (req, res) => {
//   res.render("landing");
// };

exports.login_get = (req, res) => {
  const error = req.session.error;
  delete req.session.error;
  res.json({login_page: true});
}; 

exports.login_post = async (req, res) => {
  const { data } = req.body;

  const { username, password } = data;

  const user = await User.findOne({ username });

  if (!user) {
    req.session.error = "Invalid Credentials";
    // return res.redirect("login");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    req.session.error = "Invalid Credentials";
    // return res.redirect("login");
  }

  req.session.isAuth = true;
  req.session.username = user.username;
  res.json({"loggedIn": true});
};


exports.dashboard_get = (req, res) => {
  const username = req.session.username;
  res.json({ name: username });
};

exports.logout_post = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("login");
  });
};