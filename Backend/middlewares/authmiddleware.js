import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(400).json({
                message: "User not authenticated",
                success: false,
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decode.userId);
        
        if (!user) {
            return res.status(401).json({ 
                message: "User not found" ,
                success: false
            });
        }

        req.id = user._id;
        req.role = user.role;
        next();
        
    } catch (error) {
        return res.status(500).json({
            messgae: "Internal server error in authMiddleware, "+error,
            success: false,
        });
    }
}

export default authMiddleware;