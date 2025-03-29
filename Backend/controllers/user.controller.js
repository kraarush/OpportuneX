import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from 'validator';
import getDataUri from "../utils/datauri.js";
import refinedUser from "../utils/refinedUser.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {

    let { fullname, email, phoneNumber, password, role } = req.body;
    const file = req.file;

    
    fullname = fullname?.trim() || "";
    email = validator.normalizeEmail(email?.trim() || "");
    phoneNumber = /^[0-9]{10}$/.test(phoneNumber) ? phoneNumber : "";
    password = password?.trim() || "";

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

    let cloudResponse;
    
    if (file) {

      if (!req.file.mimetype.startsWith("image/")) {
        return res.status(400).json({ message: "Invalid file type. Only image files are allowed.", success: false });
      }

      if (req.file.size > 5 * 1024 * 1024) {
        return res.status(400).json({ message: "File size too large. Max allowed is 5MB.", success: false });
      }

      const fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content, { folder: 'profile_pic' });
    }

    const profile_pic = cloudResponse?.secure_url || "";

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: profile_pic
      }
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
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

    const isProduction = process.env.NODE_ENV === "production";

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });

    const cookieName = role === 'student' ? 'student_token' : 'recruiter_token';

    res.cookie('student_token', '', { expires: new Date(0), path: '/' });
    res.cookie('recruiter_token', '', { expires: new Date(0), path: '/' });
    
    res
      .status(200)  
      .cookie(cookieName, token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'strict',
      })
      .json({
        message: `Welcome back, ${user.fullname}`,
        user: refinedUser(user),
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
    console.error("Logout Error: ", error);
    res.status(500).json({
      message: `Internal server error in logging out: ${error.message}`,
      success: false,
    });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const files = req.files;

    let resumeCloudResponse, profilePhotoCloudResponse;
    
    if (files?.resume) {
      const resumeUri = getDataUri(files.resume[0]);
      resumeCloudResponse = await cloudinary.uploader.upload(resumeUri.content, { folder: 'resumes' });
    }

    if (files?.profilePhoto) {
      const profilePhotoUri = getDataUri(files.profilePhoto[0]);
      profilePhotoCloudResponse = await cloudinary.uploader.upload(profilePhotoUri.content, { folder: 'profile_photos' });
    }

    const userId = req.id;
    let user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    if (email && email !== user.email) {
      let emailExists = await User.findOne({ email });
      if (emailExists && emailExists._id.toString() !== userId.toString()) {
        return res.status(400).json({ message: "Email already in use", success: false });
      }
    }

    user.fullname = fullname || user.fullname;
    user.email = email || user.email;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.profile.bio = bio || user.profile.bio;
    user.profile.skills = skills ? skills.split(",").map(skill => skill.trim()) : user.profile.skills;

    if (resumeCloudResponse) {
      user.profile.resume = resumeCloudResponse.secure_url;
      user.profile.resumeOriginalName = files.resume[0].originalname;
    }

    if (profilePhotoCloudResponse) {
      user.profile.profilePhoto = profilePhotoCloudResponse.secure_url;
    }

    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user: refinedUser(user)
    });

  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({
      message: "Internal server error updating profile, " + error.message,
      success: false,
    });
  }
};