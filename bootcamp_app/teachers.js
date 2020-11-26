const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);
console.log(args)
const sqlQUery = {
  text:`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id 
  JOIN students ON students.id = assistance_requests.student_id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name = $1
  ORDER By teacher;
    `,
  values: args
}
pool.query(sqlQUery)
.then (res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`)
  })
})
.catch(err => console.log('query error', err));