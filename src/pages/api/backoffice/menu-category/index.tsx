import { prisma } from "@/utilis/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method

    if(method==="GET"){
        res.status(200).json({method:req.method})
    }else if(method==="POST"){
        const {name,isAvailable} = req.body;
        const isAvaild = name && isAvailable !== "undefined";
        if(!isAvaild) return res.status(400).send("bad request");
        const menuCategory = await prisma.menuCategory.create({data:{name,isAvailable}})
        return res.status(200).json({menuCategory});
    }else if(method==="PUT"){

    }else if(method==="DELETE"){

    }
    return res.status(405).send("Invaild Method");
}