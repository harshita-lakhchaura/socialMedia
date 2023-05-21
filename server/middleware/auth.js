import jwt from 'jsonwebtoken'

export const verifyToken= async(req,res,next) => {
    try{
        let token=req.header('Authorization');
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}