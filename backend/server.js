const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());

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

app.post('/create', (req, res) => {
  const sql = "INSERT INTO student (Name, Email) VALUES (?, ?)";
  const values = [
    req.body.name,
    req.body.email
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.json(err);
    }
    return res.json(result);
  });
});

app.put('/update/:id', (req, res) => {
  const sql = "update student set Name=?,Email=? where id=?";
  const values = [
    req.body.name,
    req.body.email
  ];

  const id= req.params.id;

  db.query(sql, [...values, id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.json(err);
    }
    return res.json(result);
  });
});

app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM student WHERE id = ?";

  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting student");
    } else {
      res.json({ message: "Student deleted successfully!" });
    }
  });
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});
