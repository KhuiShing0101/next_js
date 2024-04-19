import { prisma } from "@/utilis/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const session = await getSession({req});
    if(session){
        const {user} = session;

        if(user){
            const email = user.email as string;
            const name  = user.name as string;
            const db_user = await prisma.user.findFirst({where:{email}})
            if(db_user){
                const company = await prisma.company.findFirst({where: {userId: db_user.id}})
                res.status(200).json({company})
            }else{
                const new_user = await prisma.user.create({data:{name,email}})
                const userId = new_user.id 
                const new_company = await prisma.company.create({
                    data:{
                        name:"defaultCompany",
                        street:"default Street",
                        userId,
                        township:"defaultCity",
                        city:"defaultCity"
                    },
                })
                // const new_location = await prisma.location.create({
                //     data:{
                //         name:"defau"
                //     }
                // })
            }
            return res.status(200).json({email})
        }
    }
    return res.status(401).send("unAuthorized");
}