import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup Controller
export const signup = async (req, res) => {
  try {
    let { name, phone, email, dob, password } = req.body;

    if (!name || !phone || !password || !dob || !email) {
      console.log("Missing fields:", req.body);
      return res.status(400).json({ msg: "All fields are required" });
    }
 phone = phone.trim();
    console.log("Signup attempt for phone:", phone);
    const existing = await User.findOne({ phone });
     console.log("Existing user:", existing);
    if (existing) return res.status(409).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password created");
    const user = await User.create({
      name,
      phone,
      email,
      dob,
      password: hashedPassword,
    });
 console.log("User created:", user);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
console.log("JWT token created");
    res.status(201).json({
      success: true,
      token,
      name: user.name,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ msg: "Signup failed" });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    let { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ msg: "Phone and password are required" });
    }

    phone = phone.trim();
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(401).json({ msg: "Invalid phone or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid phone or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ token, name: user.name });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Login failed" });
  }
};

