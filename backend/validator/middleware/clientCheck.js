const prisma = require("../../utils/prismaUtil");
const httpstatus = require("../../utils/httpstatus");

exports.client = async(req,res,next)=>{
    try{
    const{email} = req.body;
    const client = await prisma.client.findUnique({
        where:{
            email:email,
        }
    })
    if(client){
        res.status(httpstatus.BADREQUEST).json({message: "Client Already Registered"})
    }else{
        next()
    }
    }catch(error){
        console.log(error);
    }
};

