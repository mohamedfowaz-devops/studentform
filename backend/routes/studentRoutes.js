const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json([
    {
      name: "Test Student"
    }
  ]);
});

module.exports = router;

router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;