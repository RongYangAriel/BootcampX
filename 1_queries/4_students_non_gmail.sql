SELECT name, id, name, cohort_id
FROM students
WHERE email NOT LIKE '%gmail.com' 
AND phone IS NULL;