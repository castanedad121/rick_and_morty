// const users = require("../utils/users");

// module.exports = (req, res) => {
//   const { email, password } = req.query;
//   let access = false;
//   users.find((char) => {
//     if (char.email === email && char.password === password) {
//       access = true;
//     }
//   });
//   res.status(200).json({ access });
// };

const { where } = require("sequelize");
const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    }
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    if (user.password === password) {
      return res.status(200).json({
        access: true,});
      } else {
        return res.status(403).send("Constraseña incorrecta");
      }
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = login;
