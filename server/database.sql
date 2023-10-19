CREATE DATABASE mortgage;

CREATE TABLE users (user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),  user_email VARCHAR(255) NOT NULL, user_password VARCHAR(255) NOT NULL);

CREATE TABLE newsletter(
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

