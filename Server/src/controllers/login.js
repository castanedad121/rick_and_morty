const users = require("../utils/users");

module.exports = (req, res) => {
  const { email, password } = req.query;
  let access = false;
  users.find((char) => {
    if (char.email === email && char.password === password) {
      access = true;
    }
  });
  res.status(200).json({ access });
};
