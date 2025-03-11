const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.role !== role) {
            return res.status(403).json({
                message: `Unauthorized: Only ${role}s can perform this action`,
                success: false
            });
        }
        next();
    };
};


export default authorizeRole;