import express from "express";
import mysql from "mysql2";

import cors from "cors";

const app = express();
app.use(cors()); // Allows the React frontend to talk to this backend
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",     
  database: "crime" ,
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log("--- DATABASE ERROR DETAILS ---");
    console.log("Code:", err.code);
    console.log("Message:", err.message);
    console.log("------------------------------");
    return;
  }
  console.log("Connected to the 'crime' database!");
});
// Add this route to your server.js
app.post("/reports", (req, res) => {
  const q = "INSERT INTO `update` (`officer_name`, `state`) VALUES (?)";
  const values = [req.body.officer_name, req.body.state];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Report has been created successfully.");
  });
});
// GET: Fetch all reports
app.get("/addreport", (req, res) => {
  const q = "SELECT * FROM addreport";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

// POST: Add a new crime report (Logic from Week 9 server.js)
app.post("/addreport", (req, res) => {
  const q = "INSERT INTO addreport (`crime_id`, `repoter_name`, `date`, `time`, `type_of_crime`) VALUES (?)";
  const values = [
    req.body.crime_id,
    req.body.repoter_name,
    req.body.date,
    req.body.time,
    req.body.type_of_crime
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Report created.");
  });
});

// DELETE: Remove a report (Logic from Week 11 server.js)
app.delete("/addreport/:id", (req, res) => {
  const id = req.report_id;
  db.query("DELETE FROM addreport WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});
// 1. GET: Fetch from 'update' table
app.get("/update_crime", (req, res) => {
  const q = "SELECT * FROM update_crime";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});


// 2. POST: Add to 'update' table

app.post("/update_crime", (req, res) => {
  const q = "INSERT INTO update_crime (`report_id`,`assigned_officer`, `notes`, `status`) VALUES (?,?,?)";
  const values = [
    req.body.report_id,
    req.body.assigned_officer,
    req.body.notes,
    req.body.status
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Added successfully");
  });
});

// 3. DELETE: Remove from 'update' table
app.delete("/delete-update/:id", (req, res) => {
  const sql = "DELETE FROM update_crime WHERE report_id = ?";
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Deleted successfully" });
  });
});
app.listen(5000, () => {
  console.log("Connected to the backend on port 5000.");
});