DROP DATABASE IF EXISTS groceries;

CREATE DATABASE groceries;

CREATE USER root
WITH ENCRYPTED PASSWORD 'password';

\c groceries;

CREATE TABLE trips
(
  id SERIAL PRIMARY KEY,
  trip_date VARCHAR
);

CREATE TABLE items
(
  id SERIAL PRIMARY KEY,
  trip_id SERIAL REFERENCES trips(id),
  item_name VARCHAR
);

INSERT INTO trips
  (trip_date)
VALUES
  ('November 14'),
  ('November 20');

INSERT INTO items
  (trip_id, item_name)
VALUES
  (1, 'Pizza'),
  (1, 'Oreos'),
  (1, 'Cinnamon Toast Crunch'),
  (2, 'Lube'),
  (2, 'Carrots');

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO root;

GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO root;

GRANT ALL PRIVILEGES ON DATABASE groceries TO root;