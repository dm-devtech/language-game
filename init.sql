CREATE DATABASE languagegame WITH ENCODING 'UTF8';
CREATE TABLE german (ID SERIAL PRIMARY KEY, "eng" VARCHAR(100) NOT NULL, "ger" VARCHAR(100) NOT NULL, "wordtype" VARCHAR(100) NOT NULL, "category" VARCHAR(100) NOT NULL, "gender" VARCHAR(100) NOT NULL);
INSERT INTO german (eng, ger, wordtype, category, gender) VALUES ('To run', 'laufen', 'verb', 'movement', 'n/a');

CREATE TABLE french (ID SERIAL PRIMARY KEY, "eng" VARCHAR(100) NOT NULL, "fre" VARCHAR(100) NOT NULL, "wordtype" VARCHAR(100) NOT NULL, "category" VARCHAR(100) NOT NULL, "gender" VARCHAR(100) NOT NULL);
INSERT INTO french (eng, fre, wordtype, category, gender) VALUES ('pan', 'la poêle', 'noun', 'kitchen', 'la');

CREATE TABLE latin (ID SERIAL PRIMARY KEY, "eng" VARCHAR(100) NOT NULL, "lat" VARCHAR(100) NOT NULL, "wordtype" VARCHAR(100) NOT NULL, "category" VARCHAR(100) NOT NULL, "gender" VARCHAR(100) NOT NULL);
INSERT INTO latin (eng, lat, wordtype, category, gender) VALUES ('pan', 'cacabus', 'noun', 'kitchen', 'masculine');
