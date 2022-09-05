SQL lesson 2 


Go through delete and update from mornings lesson

We don’t have any repos when we work in Workbench 

SQL has very readable syntax - easy to find solutions especially on W3 schools 

SET keyword =  set this key to this value 

WHERE is our filter / condition 

Everything outside create will have a condition 

Add WHERE condition to READ operation 

SQL is accepting logic NOT me writing logic

Database is running that logic 


Primary keys and foreign keys 
—————————————— 

In sql Primary keys and foreign keys  are what Link tables

Primary keys alone are unique identifiers for a database 

ID field not controlled by me - becomes unique value 

ALTER TABLE - allows us to change constraints, add columns, remove columns 

ALTER TABLE  movies ADD id INT UNQUIE PRIMARY KEY AUTO_INCREMENT 

Break down values 

INT = number 
Must be unique 
A primary key so its a unique identifierWhat do you think the AUTO_INCREMENT does?

Run select all 

We now have a bit of a problem 

Try and add a movie, it fails as its expecting three values, we are only giving it 2  

We have to change the way we write the CREATE query 

Go to w3 schools - lets dig for this information 

W3 schools - we are doing an INSERT query 

At the moment we are just matching the value count with the column count

We need to label the columns we are targeting 

Going to delete one of my entries 

NEEDS TO BE ONE IN THE MIDDLE OF THE DATABASE

Now one database entry short 

Run read all command - look at id column 

Then insert another item 

What id number will this entry have?

Its continually auto incremented with a unique value

Will always be projected 

You could force an ID 

INSERT INTO movies (title, actor, id) VALUES ('Jonny', 'Arditti’, 3);

You shouldn’t as it could be linked to another table - its where the relationship information comes in

Always retain the the PK as unique 

Aggregate functions

W3 schools 

SELECT COUNT (title)
FROM movies
WHERE title  = spiderman 

What is the query going to return? 

SELECT COUNT () - columns I want to return from the table I want to target

SELECT COUNT (*) FROM movies 

SELECT COUNT(*) FROM movies WHERE title = 'Jonny';  

SELECT COUNT(*) AS name FROM movies WHERE title = 'Jonny';  

Look at column name in output 

SELECT COUNT(*) AS specific_actor FROM movies WHERE actor = 'Dan Smith'; 

Back to w3 schools - the LIKE operator

Like operator is used in a WHERE clause to search for a specified pattern in a column 

SELECT  title, actor FROM movies WHERE actor like ‘Spiderman%’ 

Looking for data at the wild card 

Going to give you a dataset 

Explain dataset  

Would you like tomorrow morning to work on this or continue the lectures? 

Set task and brief have play with the data in the new dataset for the rest of the day