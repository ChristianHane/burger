CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(150) NOT NULL,
  devoured BOOLEAN
);
