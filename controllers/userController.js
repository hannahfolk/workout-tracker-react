const connection = require("../config/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// helper functions
const omitPassword = (user) => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

module.exports = {
  signup: async (req, res, next) => {
    const saltRounds = 10;
    const { username, email, password } = req.body;

    try {
      const hash = await bcrypt.hash(password, saltRounds);
      console.log(hash);
      const createUserQueryString =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      await connection.query(createUserQueryString, [
        username,
        email,
        hash,
      ]);

      const findUserQueryString = "SELECT * FROM users WHERE username = ?";
      const [user] = await connection.query(findUserQueryString, [username]);

      const token = jwt.sign({ sub: user.id }, process.env.SECRET, {
        expiresIn: "7d",
      });

      res.status(200).json({
        ...omitPassword(user),
        token,
      });
    } catch (err) {
      res.status(500).json(err);
      next(err);
    }
  },
  authenticate: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const queryString = "SELECT * FROM users WHERE username = ? OR email = ?";
      const [user] = await connection.query(queryString, [username, username]);
      if (!user) {
        res
          .status(404)
          .json(
            "Sorry. We could not find an account with that username or email."
          );
      } else {
        const pwResult = await bcrypt.compare(
          password,
          user.password.toString()
        );
        if (!pwResult) {
          res.status(401).json("Password is incorrect.");
        } else {
          const token = jwt.sign({ sub: user.id }, process.env.SECRET, {
            expiresIn: "7d",
          });

          res.status(200).json({
            ...omitPassword(user),
            token,
          });
        }
      }
    } catch (err) {
      next(err);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const queryString = "SELECT * FROM users";
      const users = await connection.query(queryString);
      res.status(200).json(users.map((user) => omitPassword(user)));
    } catch (err) {
      next(err);
    }
  },
};
