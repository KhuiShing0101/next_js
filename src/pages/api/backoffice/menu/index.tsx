import { prisma } from "@/utilis/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method

    if(method==="GET"){
        res.status(200).send("ok Get")
    }else if(method==="POST"){
        const{name,price} = req.body;
        const isAvaild = name && price !== undefined;
        if(!isAvaild) return res.status(400).send("bad request");
        const menu = await prisma.menu.create({data:{name,price}})
        return res.status(200).json({data: menu})
    }else if(method==="PUT"){

    }else if(method==="DELETE"){

    }
    return res.status(405).send("Invaild Method");
}