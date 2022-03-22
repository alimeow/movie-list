CREATE DATABASE movielist;

USE movielist;

-- from sqldesigner
CREATE TABLE `movies` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `watched` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- input default movie data below - optional:
