CREATE DATABASE languagegame;
CREATE TABLE germanverbs (ID SERIAL PRIMARY KEY, "verb-en" VARCHAR(100) NOT NULL, "verb-de" VARCHAR(100) NOT NULL);
INSERT INTO germanverbs (engverb, gerverb) VALUES ('To run', 'laufen');


CREATE TABLE germannouns (ID SERIAL PRIMARY KEY, "noun-en" VARCHAR(100) NOT NULL, "noun-de" VARCHAR(100) NOT NULL);
INSERT INTO germannouns (engnoun, gernoun) VALUES ('pan', 'die Pfanne');
