CREATE DATABASE bingo;

CREATE TABLE results (
    item_id SERIAL PRIMARY KEY,
    item VARCHAR(20),
    quantity INTEGER
);