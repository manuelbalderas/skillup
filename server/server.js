const PORT = process.env.PORT || 8000;
const express = require("express");
const { v4: uuidv4, validate } = require("uuid");
const cors = require("cors");
const app = express();
const pool = require("./db");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
// res.send("Hello world!");
// });

// get publications

app.get("/publications", async (req, res) => {
  try {
    const publications = await pool.query(
      `SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
         FROM publications P
         INNER JOIN companies C
         ON P.author = C.email;`
    );
    res.json(publications.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/publications/jobs", async (req, res) => {
  try {
    const publications = await pool.query(
      `SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
         FROM publications P
         INNER JOIN companies C
         ON P.author = C.email
         WHERE P.type='job';`
    );
    res.json(publications.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/publications/trainings", async (req, res) => {
  try {
    const publications = await pool.query(
      `SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
         FROM publications P
         INNER JOIN companies C
         ON P.author = C.email
         WHERE P.type='course';`
    );
    res.json(publications.rows);
  } catch (err) {
    console.error(err);
  }
});
app.get("/publications/:author", async (req, res) => {
  const { author } = req.params;
  try {
    const publications = await pool.query(
      `SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
       FROM publications P
       INNER JOIN companies C ON P.author = C.email
       WHERE P.author = $1`,
      [author]
    );
    res.json(publications.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/publications/jobs/:author", async (req, res) => {
  const { author } = req.params;
  try {
    const publications = await pool.query(
      `SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
         FROM publications P
         INNER JOIN companies C
         ON P.author = C.email
         WHERE P.type='job' AND P.author = $1;`,
      [author]
    );
    res.json(publications.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/publications/trainings/:author", async (req, res) => {
  const { author } = req.params;
  try {
    const publications = await pool.query(
      `SELECT P.id, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type
         FROM publications P
         INNER JOIN companies C
         ON P.author = C.email
         WHERE P.type='course' AND P.author = $1;`,
      [author]
    );
    res.json(publications.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/publication/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const publication = await pool.query(
      `SELECT P.id, P.author, C.company_name, C.profile_pic, P.title, P.remote, P.location, P.type, P.publication_description
       FROM publications P
       INNER JOIN companies C ON P.author = C.email
       WHERE P.id = $1`,
      [id]
    );
    res.json(publication.rows[0]);
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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.json({ detail: "Ingresa un correo válido." });
  }

  try {
    const signUp = await pool.query(
      `INSERT INTO students(email, hashed_password, student_name, student_last_name, country, city, university) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [email, hashedPassword, name, lastName, country, city, university]
    );
    if (signUp.rows.length) {
      return res.json({ user: signUp.rows[0] });
    } else {
      return res.json({ detail: "Ha ocurrido un error al registrarse." });
    }
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: "El correo ya se ha registrado antes." });
    }
  }
});

app.post("/company/signup", async (req, res) => {
  const { email, password, companyName, address, phoneNumber } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.json({ detail: "Ingresa un correo válido." });
  }

  try {
    const signUp = await pool.query(
      `INSERT INTO companies(email, hashed_password, company_name, company_adress, phone_number) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [email, hashedPassword, companyName, address, phoneNumber]
    );
    if (signUp.rows.length) {
      return res.json({ user: signUp.rows[0] });
    } else {
      return res.json({ detail: "Ha ocurrido un error al registrarse." });
    }
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: "El correo ya se ha registrado antes." });
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
      return res.json({ user: users.rows[0] });
    } else {
      return res.json({ detail: "Usuario o contraseña incorrectos." });
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
      return res.json({ user: users.rows[0] });
    } else {
      return res.json({ detail: "Usuario o contraseña incorrectos." });
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/create", async (req, res) => {
  const { email, title, isRemote, location, type, description } = req.body;

  if (title === null || location === null) {
    return res.json({
      detail: "No puedes crear publicaciones sin titulo o ubicación.",
    });
  }

  try {
    const query = await pool.query(
      `INSERT INTO publications(author, title, remote, location, type, publication_description) VALUES($1, $2, $3, $4, $5, $6)`,
      [email, title, isRemote, location, type, description]
    );
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: err.detail });
    }
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
