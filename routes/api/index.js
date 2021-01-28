const router = require("express").Router();
const workoutRoutes = require("./workoutRoutes");
const userRoutes = require("./userRoutes");

router.use("/workouts", workoutRoutes);
router.use("/users", userRoutes);

module.exports = router;
