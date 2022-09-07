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