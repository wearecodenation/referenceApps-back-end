Sql lesson 3

One to one - username and password table 
That username can only appear once in the password table 

One to many
A cart can only be linked to one user but a user can have multiple carts 
Many saved cards, the users ID can appear multiple times in the carts table 

Many to many
Facebook friends 

Inner join - related information between A and B

Left join 
All info from table A and related from table Bright join 
Vice versa 

——workbench
Show w3 schools case statement 
When condition is true - then do this

With like aggregate functions,  case statements live inside the SELECT key word

Mac refresh tables dropdown

Name semi protected word in SQL 

mySQL w3 schools MYSQL case 

Indent SELECT name,
CASE 
	WHEN gender = 'M' THEN 'male'
        WHEN gender = 'F' THEN 'Female'
	WHEN gender = 'U' THEN 'Non-Binary'
    END 
FROM employee_detail;

How can we change the column name?

SELECT name,
CASE 
	WHEN gender = 'M' THEN 'male'
        WHEN gender = 'F' THEN 'Female'
	WHEN gender = 'U' THEN 'Non-Binary'
    END AS gender_idenity
FROM employee_detail;

Case statements have the potential to be very powerful  
Its database computation - handled by the dbms not by writing database If we were doing this is Mongo we would have to request the data and then write the logic in say javascript and use a mongoose method 

Have also used a logical operator where is it?
= sign 

Have also got AND  / OR 

Writing raw sql quires is rare / what we are learning is concepts in this case the structure of SQL best way to learn this at first it workbench. Tomorrow we will be moving off workbench and back to vs code but still using SQL 

Go to w3 schools and look at join syntax 
I don’t need to remember it, so easy to find online
I don’t need to remember the syntax 


A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

Notice that the "CustomerID" column in the "Orders" table refers to the "CustomerID" in the "Customers" table. The relationship between the two tables above is the "CustomerID" column.

Then, we can create the following SQL statement (that contains an INNER JOIN), that selects records that have matching values in both tables:

Remember Inner join - related information between A and B
Look at the notation - in order to access particular columns in a table when referencing multiple
Tables we need to use dot notation 


The operating system of the laptops of each employee  

Current_laptop_detail and laptop_detail

The related information is the laptop_id exists in both 

PK in laptop detail and Fk in current_job_deatil

Current_job_detail to be the primary table even though it houses the FK
PT is table A 

W3 schools diagram
Want more information from current_job_detail 
Only want operating system from laptop_detail = table B 
FROM = table A 

Employee_id only exists In table A DOESN’T EXSIST IN BOTH 
Don’t need to use dot notation
SELECT employee_id, job_title = from table A / doesn’t exist in table B 

SELECT employee_id, job_title, os  = os only exists in table B 

FROM current_job_detail = table A as we need more information from it  

INNER JOIN table b = current_job_detail 
Related information = laptopId

ON = WHERE CLAUSE 
Column exists in both tables we have to specify which one 

We have taken information from one table and outputted one result 

* INNER JOIN: Returns records that have matching values in both tables
* LEFT JOIN: Returns all records from the left table, and the matched records from the right table
* RIGHT JOIN: Returns all records from the right table, and the matched records from the left table
* CROSS JOIN: Returns all records from both tables

JOIN works on related information  

RIGHT jOIN 

-- left join select all employees and find any job history they may have
-- employee table and jobs history
-- LEFT JOIN will return all records from the left table (employee_detail) 
-- even there are no matches in the right table

SELECT employee_detail.employee_id, name, job_title
FROM employee_detail 
LEFT JOIN jobs_history ON employee_detail.employee_id = jobs_history.employee_id 
ORDER BY employee_detail.name;



SELECT name,
CASE 
	WHEN gender = 'M' THEN 'male'
        WHEN gender = 'F' THEN 'Female'
	WHEN gender = 'U' THEN 'Non-Binary'
    END AS gender_idenity
FROM employee_detail; 

-- The operating system of the laptops of each employee 
SELECT employee_id, job_title, os 
FROM current_job_detail
INNER JOIN laptop_detail 
ON current_job_detail.laptop_id = laptop_detail.laptop_id; 

-- left join select all employees and find any job history they may have
-- employee table and jobs history
-- LEFT JOIN will return all records from the left table (employee_detail) 
-- even there are no matches in the right table

SELECT employee_detail.employee_id, name, job_title
FROM employee_detail 
LEFT JOIN jobs_history ON employee_detail.employee_id = jobs_history.employee_id 
ORDER BY employee_detail.name; 
