import { Router } from "express";
const router = Router();
import User from "../models/User";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

// Register User (student/faculty/admin)
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await compare(password, user.password))) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }
    const token = sign(
      { user: { id: user._id, role: user.role } },
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
