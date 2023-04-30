const PORT = process.env.PORT || 8000;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
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

    const token = jwt.sign({ email }, "secret", { expiresIn: "7d" });

    res.json({ email, token });
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
    const token = jwt.sign({ email }, "secret", { expiresIn: "7d" });
    if (success) {
      res.json({ user: users.rows[0], token });
    } else {
      res.json({ detail: "Usuario o contraseña incorrectos." });
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
