const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

// Matches with "/api/workouts"
router
  .route("/")
  .get(workoutController.getAllWorkouts)
  .post(workoutController.addWorkout);

// Matches with "/api/workouts/:id"
router.route("/resistance/:id").post(workoutController.addResistance);

router.route("/cardio/:id").post(workoutController.addCardio);

module.exports = router;
