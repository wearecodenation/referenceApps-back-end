SQL 1st lesson

Slides
——————————————————
Might look scary 
Don’t need a local instal of SQL
Going to be use workbench 

What was the DBMS we worked with last week 

SQL structured - interacting with relational databases 

Tell database 2 different entries are related - link them scope of information 

Download workbench

—————————————————————

Demo in cleaver cloud 

Create - an add-on (this is going to be our database) 

DEV option at the top (never cost any money)

Scroll down to next

Give it a name and keep France selected - click 

Database credentials 
Everything here will help us to connect to out database when we work back in node - connection URI

We will need - host, user and password

Pause let everyone catch up 

Click PHPMYAdmin

Click on database on the left 

Click SQL tabadd use - database name

Every query we write, after this one will effect this database 00:21:05 ————————————————————

Open SQL workbench 

Click plus symbol

Designed to create new database  connections

In our case, cleaver cloud 

Click plus button 

Give it a connection name

Three things we need to change 

Username
Hostname 
Password 

This information we Get from cleaver cloud 
Mac - keychain 
Windows - vault 
Secure place it stores our passwords

Back to cleaver cloud

Host goes in hostname 
Always ends in .com and starts with database name 

Port is always 3306 with SQL so we don’t need to change that

Username that is the User 

NEED TO UNHASH PASSWORD BEFORE WE COPY IT 
HAVE TO UNLOCK IT BEFORE WE COPY IT

Copy password 

Back to workbench

Click on store in keychain / vault 

Test connection
Before we click ok

If failed go back to cleaver cloud and make sure everything you copied is correct 

PAUSE FOR ISSUES

Grey box underneath MySQL Connections

Tabs 
Windows at the bottom 
Mac at the top 

Click the one that says schemas 

Should see your database 

Click refresh button / might have to spam it for your database to load 

Double click on the database 

Once its bold we are using that database 

Looks like VS code its not 

We are NOT writing code, we are writing database commands 

Don’t need to copy this bit - just examples 

SELECT * FROM * 

Always run  

CREATE TABLE

We can delete the command as we don’t need to run it again 

W3 schools best resource we can use 

Open mySQl w3 schools  

All about CRUD 
Can anyone remind me what CRUD stands for 

MYSQL requires structure - its a structured database unlike mongo 

Before we perform operations, we need to create the structure 

Need to give the table columns
CREATE TABLE movies ()  

Column are individual fields of data in the database 


CREATE TABLE movies (title, actor)  

Need to give it constraints 
Think back to our model 
Required , unique etc  

If we want title to be a string we add

CREATE TABLE movies (title VARCHAR, actor)  

VARCHAR = string

CREATE TABLE movies (title VARCHAR(255), actor)  

255 potential characters in length 

If we want title to be required we need 

CREATE TABLE movies (title VARCHAR(255) NOT NULL, actor)  

CREATE TABLE movies (title VARCHAR(255) NOT NULL UNIQUE, actor) ;

Caps protected words in SQL 

WE NEED A SEMI COLON so MySQL knows the query is finished 

Not like javascript where it makes no difference to the line 

CREATE TABLE movies (title VARCHAR(255) NOT NULL UNIQUE, actor VARCHAR(255) ; 

CREATE TABLE movies (title VARCHAR(255) NOT NULL UNIQUE, actor VARCHAR(255) DEFAULT 'Not specified');

Lightning bolt on the left will run our query 
If we highlight the line it will only run this query 

Middle lightning bolt will run line underneath keyboard curser 

Green tick query is successful, will give me an error if query hasn’t worked

Run again show error 

— comment out command, won’t run anymore 

Useful for keeping a history for you guys 

Is that command a CRUD operation?

CRUD is done on database entires not databases 

— create operation 
INSERT INTO movies 

After we give it values

INSERT INTO movies  VALUES () 

The values here need to conform to the constraints  of our columns and the order of our columns  

INSERT INTO movies VALUES (“dan smith”, “spiderman”)

Wrong way round the order has to match the columns 

INSERT INTO movies VALUES (“Spiderman”, “Dan Smith”)

What happens if we run this same command again? duplicate error

Lets do a read command
SELECT 
Then we add the columns we want 
If we want them all we can use the * 
* = all

This is like the findAll mongo operation

SELECT * FROM movies 

We get a table output in columns 
Like excel 

We have got a update and delete operation to 

Find on w3 schools

Task to get update and delete working before this afternoon 