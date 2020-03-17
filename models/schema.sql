DROP DATABASE IF EXISTS flashcard_quiz_db;

CREATE DATABASE flashcard_quiz_db;

USE DATABASE flashcard_quiz_db;

CREATE TABLE quiz (
    id INT AUTO_INCREMENT,
    exercise INT,
    question VARCHAR(255),
    code VARCHAR(255),
    label VARCHAR(255),
    answer VARCHAR(255),
    category VARCHAR(255),
    PRIMARY KEY (id)
);


