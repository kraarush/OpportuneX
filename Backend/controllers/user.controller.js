import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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

    const hashedPassword = await bcrypt.hash(password,10);

    await User.Create({
        fullname,
        email, 
        phoneNumber, 
        password: hashedPassword, 
        role
    });

  } catch (error) {}
};

export const login = async (req, res) => {
    try {
        const {email, password, role} = req.body;

        if(!email || !password || !role) {
            return res.status(400).json({
                message: "some fields are missing",
                success: false,
            });
        }

        let user = User.findOne({email});

        // checking if user exists with the given email
        if(!user){
            return res.status(400).json({
                message: "Invalid email or password",
                success: false,
            });
        }

        // checking correct password
        const isPassword = await bcrypt.compare(password,user.password);
        if(!isPassword){
            return res.status(400).json({
                message: "Invalid email or password",
                success: false,
            });
        }

        // checking for correct role
        if(role !== user.role){
            return res.status(400).json({
                message: "Account with given role does not exists",
                success: false,
            });
        }

        const tokenData = {
            userId: user._id
        };

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: '1d'});

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie('token', token, 
            {
                maxAge: 1*24*60*60*1000,
                httpsOnly: true,
                sameSite: 'strict'
            }
        ).json({
            message: `welcome back, ${user.fullname}`,
            user,
            success: true,
        })



    } catch (error) {
        
    }
};
