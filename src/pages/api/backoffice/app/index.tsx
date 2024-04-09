import { prisma } from "@/utilis/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method

    if(method==="GET"){
        const menus = await prisma.menu.findMany();
        const menuCategories = await prisma.menuCategory.findMany()
        console.log(menuCategories);
        res.status(200).json({menus,menuCategories})
    }else if(method==="POST"){

    }else if(method==="PUT"){

    }else if(method==="DELETE"){

    }
    return res.status(405).send("Invaild Method");
}