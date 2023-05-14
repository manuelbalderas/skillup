const PORT = process.env.PORT || 8000;
const express = require("express");
const { v4: uuidv4, validate } = require("uuid");
const cors = require("cors");
const app = express();
const pool = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
// res.send("Hello world!");
// });

// get publications

app.get("/publications", async (req, res) => {
  try {
    const publications =
      await pool.query(`SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
FROM publications P
INNER JOIN companies C
ON P.author = C.email;`);

    res.json(publications.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/my-publications", async (req, res) => {
  const { author } = req.body;
  try {
    const publications = await pool.query(
      `SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
FROM publications P
INNER JOIN companies C
ON P.author = C.email
WHERE author=$1;`,
      [author]
    );
  } catch (err) {
    console.error(err);
  }
});

// sign up

app.post("/student/signup", async (req, res) => {
  const { email, password, name, lastName, country, city, university } =
    req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const signUp = await pool.query(
      `INSERT INTO students(email, hashed_password, student_name, student_last_name, country, city, university) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [email, hashedPassword, name, lastName, country, city, university]
    );
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: err.detail });
    }
  }
});

app.post("/company/signup", async (req, res) => {
  const { email, password, companyName, address, phoneNumber } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const signUp = await pool.query(
      `INSERT INTO companies(email, hashed_password, company_name, company_adress, phone_number) VALUES($1, $2, $3, $4, $5)`,
      [email, hashedPassword, companyName, address, phoneNumber]
    );
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: err.detail });
    }
  }
});

app.post("/student/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await pool.query(`SELECT * FROM students WHERE email = $1`, [
      email,
    ]);
    if (!users.rows.length)
      return res.json({ detail: "Usuario o contraseña incorrectos." });
    const success = await bcrypt.compare(
      password,
      users.rows[0].hashed_password
    );
    if (success) {
      res.json({ user: users.rows[0] });
    } else {
      res.json({ detail: "Usuario o contraseña incorrectos." });
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/company/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await pool.query(`SELECT * FROM companies WHERE email = $1`, [
      email,
    ]);
    if (!users.rows.length)
      return res.json({ detail: "Usuario o contraseña incorrectos." });
    const success = await bcrypt.compare(
      password,
      users.rows[0].hashed_password
    );
    if (success) {
      res.json({ user: users.rows[0] });
    } else {
      res.json({ detail: "Usuario o contraseña incorrectos." });
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
