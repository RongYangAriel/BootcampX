const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);
console.log(args);
const sqlQUery = {
  text:`
    SELECT students.id, students.name, cohorts.name as cohort
    FROM students
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name LIKE $1
    LIMIT $2;
    `,
  values: args
}
pool.query(sqlQUery)
.then (res => {
  res.rows.forEach( user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} corhort.`)
  })
})
.catch(err => console.log('query error', err));