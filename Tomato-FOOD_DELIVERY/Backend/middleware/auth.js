import jwt from "jsonwebtoken"

const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not authorised login again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id //as we have passed user id while creating token so we can access it here while decoding
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware;