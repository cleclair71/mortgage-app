CREATE DATABASE mortgage;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),  
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCHAR(255) NOT NULL,
    date_created TIMESTAMP NOT NULL);
    

