CREATE DATABASE languagegame WITH ENCODING 'UTF8';
CREATE TABLE german (ID SERIAL PRIMARY KEY, "eng" VARCHAR(100) NOT NULL, "ger" VARCHAR(100) NOT NULL, "wordtype" VARCHAR(100) NOT NULL, "category" VARCHAR(100) NOT NULL, "gender" VARCHAR(100) NOT NULL);
INSERT INTO german (eng, ger, wordtype, category, gender, difficulty) VALUES ('To run', 'laufen', 'verb', 'movement', 'n/a', 'easy');

CREATE TABLE french (ID SERIAL PRIMARY KEY, "eng" VARCHAR(100) NOT NULL, "fre" VARCHAR(100) NOT NULL, "wordtype" VARCHAR(100) NOT NULL, "category" VARCHAR(100) NOT NULL, "gender" VARCHAR(100) NOT NULL);
INSERT INTO french (eng, fre, wordtype, category, gender, difficulty) VALUES ('pan', 'la poêle', 'noun', 'kitchen', 'la', 'easy');

CREATE TABLE latin (ID SERIAL PRIMARY KEY, "eng" VARCHAR(100) NOT NULL, "lat" VARCHAR(100) NOT NULL, "wordtype" VARCHAR(100) NOT NULL, "category" VARCHAR(100) NOT NULL, "gender" VARCHAR(100) NOT NULL, "difficulty" VARCHAR(100) NOT NULL, "declension" VARCHAR(100) NOT NULL);
INSERT INTO latin (eng, lat, wordtype, category, gender, difficulty, declension) VALUES ('pan', 'cacabus', 'noun', 'kitchen', 'masculine', 'easy', '2nd');
