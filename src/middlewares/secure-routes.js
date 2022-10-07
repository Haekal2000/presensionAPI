import jwt from 'jsonwebtoken';

export const SecureRoutes = (req, res, next) => {
    const {authorization} = req.headers;
    const token = authorization && authorization.split(" ")[1];

        
    jwt.verify(token, "this is test string for jwt", {}, (err, user) =>{
        if (err) {
            return res.status(403).json({status: 403, message: err, innerMessage: ''});
        }
        req.user = user;
        next();
    });
}