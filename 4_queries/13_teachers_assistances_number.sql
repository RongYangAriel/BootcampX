SELECT teachers.name as teacher, cohorts.name as cohort, COUNT(assistance_requests.*) as total_assistances
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id 
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER By teacher;