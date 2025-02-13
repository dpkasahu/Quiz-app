const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["student", "admin"], default: "student" }, // 🆕 Role added
  quizAttempted: [
    {
      quizId: String,
      quizResult: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
