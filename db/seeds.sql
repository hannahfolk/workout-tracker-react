USE `workout_tracker`;

INSERT INTO `users` (`username`, `email`, `password`)
VALUES
("hfolk25", "hfolk25@gmail.com", "$2b$10$GOECt5pA6ZSL3QJX06Rq3eEbH0tZkB/xmdxAe137DIT95fS9pCRFK"),
("bananaclink88", "bananaclink88@gmail.com", "$2b$10$GOECt5pA6ZSL3QJX06Rq3eEbH0tZkB/xmdxAe137DIT95fS9pCRFK");

INSERT INTO `workouts` (`date`)
VALUES
("2021-01-25");

INSERT INTO `exercises` (`type`, `name`, `duration`, `weight`, `reps`, `sets`, `workout_id`)
VALUES
("resistance", "Bicep Curl", 20, 100, 10, 4, 1),
("resistance", "Lateral Pull", 20, 300, 10, 4, 1),
("resistance", "Push Press", 25, 185, 8, 4, 1),
("resistance", "Bench Press", 20, 285, 10, 4, 1);

INSERT INTO `exercises` (`type`, `name`, `duration`, `distance`, `workout_id`)
VALUES
("cardio", "Running", 25, 4, 1);