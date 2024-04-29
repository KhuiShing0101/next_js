import { prisma } from "@/utilis/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method

    if(method==="GET"){
        return res.status(200).json({method:req.method})
    }else if(method==="POST"){
        const {name,isAvailable,companyId} = req.body;
        const isAvaild = name && isAvailable && companyId !== "undefined";
        if(!isAvaild) return res.status(400).send("bad request");
        const menuCategory = await prisma.menuCategory.create({data:{name,isAvailable,companyId}})
        return res.status(200).json({menuCategory});
    }else if(method==="PUT"){
        const {id,...payload} = req.body;
        const menuCategory = await prisma.menuCategory.findFirst({where:{id}});
        if(!menuCategory) return res.status(400).send("bad request");
        const updatedMenuCategory = await prisma.menuCategory.update({data:payload,where:({id})});
        return res.status(200).json({updatedMenuCategory})
    }else if(method==="DELETE"){

    }
    return res.status(405).send("Invaild Method");
}