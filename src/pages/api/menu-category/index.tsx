import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method

    if(method==="GET"){
        res.status(200).json({method:req.method})
    }else if(method==="POST"){

    }else if(method==="PUT"){

    }else if(method==="DELETE"){

    }
    return res.status(405).send("Invaild Method");
}