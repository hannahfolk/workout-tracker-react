const connection = require("../config/connection");

// Defining methods for the bookController
module.exports = {
  getAllWorkouts: async (req, res) => {
    const queryString = `SELECT workouts.id AS id, date, type, name, duration, weight, reps, sets, distance
    FROM workouts LEFT JOIN exercises ON workouts.id = exercises.workout_id`;
    const dbWorkout = await connection.query(queryString);

    console.table(dbWorkout);
    res.json(dbWorkout);
  },
  addWorkout: async (req, res) => {
    const queryString = `INSERT INTO workouts (date) VALUES (DEFAULT)`;
    const dbWorkout = await connection.query(queryString);
    console.log(dbWorkout);
  },
  addResistance: async (req, res) => {
    const { type, name, duration, weight, reps, sets } = req.body;
    const queryString = `INSERT INTO exercises (type, name, duration, weight, reps, sets, workout_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const dbWorkout = await connection.query(queryString, [
      type,
      name,
      duration,
      weight,
      reps,
      sets,
      req.params.id,
    ]);
    console.log(dbWorkout);
  },
  addCardio: async (req, res) => {
    const { type, name, duration, distance } = req.body;
    const queryString = `INSERT INTO exercises (type, name, duration, distance, workout_id)
    VALUES (?, ?, ?, ?, ?)`;

    const dbWorkout = await connection.query(queryString, [
      type,
      name,
      duration,
      distance,
      req.params.id,
    ]);
    console.log(dbWorkout);
  },
};
