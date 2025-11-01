import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 5000;

// Sample data
const employees = [
  { id: 1, name: "Alice", department: "Finance" },
  { id: 2, name: "Bob", department: "HR" },
  { id: 3, name: "Charlie", department: "Tech" }
];

// API route
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
