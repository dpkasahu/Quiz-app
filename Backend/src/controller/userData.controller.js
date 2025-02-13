const express = require("express");
const router = express.Router();
const QuizData = require("../model/quizdata.model");  // ✅ Renamed to QuizData
const User = require("../model/auth.model");         // ✅ Keep User for auth data
const { protect, adminOnly } = require("../middleware/authMiddleware");

// 🟢 Student: Update quiz attempts
router.post("/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          quizAttempted: {
            $each: [{ quizId: req.body.quizId, quizResult: req.body.quizResult }],
          },
        },
      },
      { new: true }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

// 🟢 Admin: Get all students and their quiz results
router.get("/students-results", protect, adminOnly, async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("name email quizAttempted");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// 🟢 Admin: Get all logged-in users
router.get("/loggedin-users", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select("name email role");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
