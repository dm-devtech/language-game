CREATE TABLE germanverbs (ID SERIAL PRIMARY KEY, engverb VARCHAR(100) NOT NULL, gerverb VARCHAR(100) NOT NULL);
INSERT INTO germanverbs (engverb, gerverb) VALUES ('To run', 'laufen');


CREATE TABLE germannouns (ID SERIAL PRIMARY KEY, engnoun VARCHAR(100) NOT NULL, gernoun VARCHAR(100) NOT NULL);
INSERT INTO germannouns (engnoun, gernoun) VALUES ('pan', 'die Pfanne');
