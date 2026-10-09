const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // apna DB user
  password: "Sakshi_adm@8553", // apna DB password
  database: "ticketdb" // apna DB name
});

app.post("/tickets", (req, res) => {
  const { user_id, event_name, event_date, venue, seat } = req.body;
  const sql = "INSERT INTO tickets (user_id, event_name, event_date, venue, seat) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [user_id, event_name, event_date, venue, seat], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database insert failed" });
    }
    res.json({ id: result.insertId, user_id, event_name, event_date, venue, seat });
  });
});


// ✅ List Tickets
app.get("/tickets", (req, res) => {
  db.query("SELECT * FROM Tickets", (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
