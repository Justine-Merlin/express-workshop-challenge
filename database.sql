DROP DATABASE IF EXISTS challenge_express;

CREATE DATABASE challenge_express;

USE challenge_express;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(80) UNIQUE NOT NULL,
  password VARCHAR(80) NOT NULL
);

INSERT INTO users (email, password) VALUES
  ("wilder1@email.com", "testpassword"),
  ("wilder2@email.com", "testpassword");