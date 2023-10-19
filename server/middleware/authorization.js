import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

// this code is for verifying tokens when users want to make any changes - currently not implemented anywhere yet but would be placed as middleware in routes (e.g., editing their profile)
module.exports = async(req, res, next) => {
    try {
        const jwtToken = req.cookies.accessToken

        if(!jwtToken) {
            return res.status(403).json("Not Authorized")
        }

       jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json("Token not valid")
        req.user = user;
        console.log("user: ", user)
        next()
       })


    } catch (err) {
        console.error(err.message);
        return res.status(403).json("Not Authorized");
    }
}