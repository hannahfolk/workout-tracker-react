DROP DATABASE IF EXISTS `workout_tracker`;
CREATE DATABASE `workout_tracker`;

USE `workout_tracker`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) UNIQUE,
  `email` VARCHAR(191) UNIQUE,
  `password` BINARY(60),
  `reset_password_token` VARCHAR(255) DEFAULT NULL,
  `reset_password_expires` BIGINT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `workouts`;
CREATE TABLE `workouts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `exercises`;
CREATE TABLE `exercises` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(40) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `duration` INT NOT NULL,
  `weight` INT,
  `reps` INT,
  `sets` INT,
  `distance` INT,
  `workout_id` INT NOT NULL,
  PRIMARY KEY(`id`)
);