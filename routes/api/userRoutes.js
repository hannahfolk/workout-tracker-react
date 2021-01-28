const router = require("express").Router();
const userController = require("../../controllers/userController.js");

// Matches with "/api/users"
router.post("/signup", userController.signup);
router.post("/authenticate", userController.authenticate);
router.get("/", userController.getAll);

module.exports = router;
