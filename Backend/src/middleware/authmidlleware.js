const jwt =require('jsonwebtoken')

 async function identify(req, res, next) {
    
    const token = req.cookies?.token;
        if (!token) {
            return res.status(401).send('Unauthorized');
        }
        const decode = jwt.verify(token, process.env.jwt);
        if (!decode) {
            return res.status(401).send('Unauthorized');
        }
        req.user = decode;
        next();
}
module.exports = identify