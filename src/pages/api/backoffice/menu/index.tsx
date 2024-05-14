import { prisma } from "@/utilis/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method

    if(method==="GET"){
        res.status(200).send("ok Get")
    }else if(method==="POST"){
        const{name,price,menuCategoryIds} = req.body;
        const isVaild = name && price !== undefined && menuCategoryIds.length > 0;
        if(!isVaild) return res.status(400).send("bad request");
        const menu = await prisma.menu.create({data:{name,price}});
        const menuCategoryMenus = await prisma.$transaction(
            menuCategoryIds.map((itemId:number)=>
                prisma.menuCategoryMenu.create({
                    data: { menuId:menu.id, menuCategoryId:itemId }
                })
            )
        );
        return res.status(200).json({menu,menuCategoryMenus})
    }else if(method==="PUT"){

    }else if(method==="DELETE"){

    }
    return res.status(405).send("Invaild Method");
}