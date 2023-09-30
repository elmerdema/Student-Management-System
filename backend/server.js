const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ms',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM student';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.json(err);
    }
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});
