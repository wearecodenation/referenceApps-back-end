CREATE TABLE movies (title VARCHAR(255) NOT NULL UNIQUE, actor VARCHAR(255) DEFAULT 'Not specified');

ALTER TABLE  movies ADD id INT UNIQUE PRIMARY KEY AUTO_INCREMENT; 

-- CREATE 
INSERT INTO movies VALUES ('Alex', 'Arditti');

-- insert command when id column has been added
INSERT INTO movies (title, actor) VALUES ('Jonny', 'Arditti');

-- READ 
SELECT  * FROM movies; 

SELECT * FROM movies WHERE actor = 'Dan Smith'; 
SELECT COUNT(*) FROM movies;
SELECT COUNT(*) FROM movies WHERE title = 'Jonny'; 
SELECT COUNT(*) AS specific_actor FROM movies WHERE actor = 'Dan Smith'; 
SELECT COUNT(*) AS specific_actor FROM movies WHERE actor = 'Dan Smith'; 

-- like operator
SELECT  title, actor FROM movies WHERE title LIKE "Spiderman%";


-- Update 
UPDATE movies
SET title = 'updated title', actor = 'updated actor'
WHERE title = 'Spiderman'; 

-- Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!

-- Delete
DELETE FROM movies WHERE title ='Spiderman5';
DELETE FROM movies;