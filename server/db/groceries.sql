DROP DATABASE IF EXISTS groceries;

CREATE DATABASE groceries;

CREATE USER root
WITH ENCRYPTED PASSWORD 'password';

\c groceries;

CREATE TABLE trips
(
  id SERIAL PRIMARY KEY,
  trip_name VARCHAR NOT NULL,
  trip_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE items
(
  id SERIAL PRIMARY KEY,
  trip_id SERIAL REFERENCES trips(id),
  item_name VARCHAR
);

INSERT INTO trips
  (trip_name)
VALUES
  ('first trip!'),
  ('second trip!');

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