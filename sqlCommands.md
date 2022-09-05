CREATE TABLE movies (title VARCHAR(255) NOT NULL UNIQUE, actor VARCHAR(255) DEFAULT 'Not specified');

-- CREATE 
INSERT INTO movies VALUES ('Spiderman3', 'Dan Smith');

-- READ 
SELECT  * FROM movies; 


----- TASK

-- Update 
UPDATE movies
SET title = 'updated title', actor = 'updated actor'
WHERE title = 'Spiderman'; 

-- Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!

-- Delete
DELETE FROM movies WHERE title ='Spiderman3';
DELETE FROM movies;