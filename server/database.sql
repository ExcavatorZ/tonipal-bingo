CREATE DATABASE bingo;

\c bingo /* connect to bingo */

CREATE TABLE results (
    item_id SERIAL PRIMARY KEY,
    item VARCHAR(20) UNIQUE,
    quantity INTEGER NOT NULL
);

SELECT * FROM results; /* select all */

DROP DATABASE bingo; /* delete database */