import jwt from 'jsonwebtoken';

export const SecureRoutes = (req, res, next) => {
    const {authentication} = req.headers;
    const token = authentication && authentication.split(" ")[1];
        
    jwt.verify(token, "this is test string for jwt", {}, (err, user) =>{
        if (err) {
            return res.status(403).json({status: 403, message: err, innerMessage: ''});
        }
        req.user = user;
        next();
    });
}