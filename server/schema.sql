CREATE DATABASE movielist;

USE movielist;

-- from sqldesigner
CREATE TABLE `Movies` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `watched` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- input default movie data below - optional:
-- Is the below dummy data the solution to 'seed data into database'?
-- should I add watched property here or it's just a control property in react front end only...
INSERT INTO Movies (title, watched) VALUES ('Sunshine', 0);