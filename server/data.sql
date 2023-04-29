CREATE DATABASE skillup;

CREATE TABLE students (
  email VARCHAR(255) PRIMARY KEY,
  hashed_passwd VARCHAR(255),
  student_name VARCHAR(50),
  student_last_name VARCHAR(50),
  country VARCHAR(50),
  city VARCHAR(50),
  university VARCHAR(50),
  profile_pic VARCHAR(255)
);