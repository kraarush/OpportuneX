import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from 'validator';

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "some fields are missing",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    // checking if user with same email exists
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error in Creating account, " + error.message,
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password, role } = req.body;

    email = validator.normalizeEmail(email?.trim() || "");
    password = password?.trim() || "";
    role = role?.trim() || "";

    if (!email || !password || !role) {
      return res.status(400).json({
        message: 'Some fields are missing',
        success: false,
      });
    }

    // checking validity of email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email format',
        success: false,
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'Email does not exist',
        success: false,
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).json({
        message: 'Incorrect password',
        success: false,
      });
    }

    if (role !== user.role) {
      return res.status(404).json({
        message: 'Account with given role does not exist',
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });

    const cookieName = role === 'student' ? 'student_token' : 'recruiter_token';

    res.clearCookie('student_token');
    res.clearCookie('recruiter_token');

    res
      .status(200)
      .cookie(cookieName, token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,      // change to false so that js-cookie can access them in frontend
        secure: false,
        sameSite: 'strict',
      })
      .json({
        message: `Welcome back, ${user.fullname}`,
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          profile: user.profile,
        },
        success: true,
      });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      message: `Internal server error: ${error.message}`,
      success: false,
    });
  }
};


export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("student_token", "", { maxAge: 0 })
      .cookie("recruiter_token", "", { maxAge: 0 })
      .json({
        message: "Logged out successfully",
        success: true,
      });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({
      message: `Internal server error in logging out: ${error.message}`,
      success: false,
    });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    const userId = req.id;    // id is coming from authmiddleware
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "No user found with given id",
        success: false,
      });
    }

    // checking if the user is updating to an already existing email
    let checkEmail = await User.findOne({ email });
    if (checkEmail && checkEmail._id.toString() !== userId) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    Object.assign(user, {
      fullname: fullname || user.fullname,
      email: email || user.email,
      phoneNumber: phoneNumber || user.phoneNumber,
      profile: {
        ...user.profile,
        bio: bio || user.profile.bio,
        skills: skills ? skills.split(",") : user.profile.skills,
      },
    });

    await user.save();

    // resetting the user object to remove sensitive data before sending through response
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error updating profile, " + error,
      success: false,
    });
  }
};
