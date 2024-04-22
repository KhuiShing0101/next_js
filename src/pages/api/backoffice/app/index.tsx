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
            const dbUser = await prisma.user.findFirst({where:{email}})
            if(dbUser){
                const companyId = dbUser.companyId
                const company = await prisma.company.findFirst({where:{id:companyId}})
                const locations = await prisma.location.findMany({where:{companyId}})
                const menuCategories = await prisma.menuCategory.findMany({where:{companyId}})
                const menuCategoryIds = await menuCategories.map(item=>item.id)
                const menuCategoryMenus = await prisma.menuCategoryMenu.findMany({where:{menuCategoryId:{in:menuCategoryIds}}})
                const menuCategoryMenuIds = await menuCategoryMenus.map(item=>item.id)
                const menus = await prisma.menu.findMany({where:{id:{in:menuCategoryMenuIds}}})
                const locationIds = await locations.map(item=>item.id)
                const tables = await prisma.table.findMany({where:{id:{in:locationIds}}})
                const menuIds = await menus.map(item=>item.id)
                const menuAddonCategories = await prisma.menuAddonCategory.findMany({where:{menuId:{in:menuIds}}})
                const menuAddonCategoryIds = await menuAddonCategories.map(item=>item.addonCategoryId)
                const addonCategories = await prisma.addonCategory.findMany({where:{id:{in:menuAddonCategoryIds}}})
                const addons = await prisma.addon.findMany({where:{id:{in:addonCategories.map(item=>item.id)}}})
                res.status(200).json({
                    company,
                    locations,
                    menuCategories,    
                    menus,
                    menuCategoryMenus,
                    tables,
                    menuAddonCategories,
                    addonCategories,
                    addons,
                })
            }else{
                const newCompany = await prisma.company.create({
                    data:{
                        name:"defaultCompany",
                        street:"default Street",
                        township:"defaultCity",
                        city:"defaultCity"
                    },
                })
                const newUser = await prisma.user.create({
                    data:{
                        name,
                        email,
                        companyId:newCompany.id
                    }
                })
                const newLocation = await prisma.location.create({
                    data:{
                        name:"default Location",
                        street:"default street",
                        city:"default city",
                        township:"default township",
                        companyId:newCompany.id
                    }
                })
                const newTable = await prisma.table.create({
                    data:{
                        name:"default table",
                        accessUrl:"",
                        locationId:newLocation.id
                    }
                })
                const newMenuCategory = await prisma.menuCategory.create({
                    data:{
                        name:"Default menu category",
                        companyId:newCompany.id,
                    }
                })
                const newMenu = await prisma.menu.create({data:{name:"default menu",price:2000,assetUrl:"",description:""}})
                const newMenuCategoryMenu = await prisma.menuCategoryMenu.create({data:{menuId:newMenu.id,menuCategoryId:newMenuCategory.id}})
                const newAddonCategory = await prisma.addonCategory.create({data:{name:"default name"}})
                const newMenuAddonCategory = await prisma.menuAddonCategory.create({data:{menuId:newMenu.id,addonCategoryId:newAddonCategory.id}})
                const newAddonData = [
                    {name:"newAddon1",addonCategoryId:newMenuAddonCategory.id},
                    {name:"newAddon2",addonCategoryId:newMenuAddonCategory.id},
                    {name:"newAddon3",addonCategoryId:newMenuAddonCategory.id}
                ]
                const newAddons = await prisma.$transaction(
                    newAddonData.map((addon)=>prisma.addon.create({data:addon}))
                )
                // const newAddon1 = await prisma.addon.create({data:{name:"default addon1",addonCategoryId:newAddonCategory.id}})
                res.status(200).json({
                        company:newCompany,
                        locations:[newLocation],
                        menuCategories:[newMenuCategory],    
                        menus: [newMenu],
                        menuCategoryMenus:[newMenuCategoryMenu],
                        tables:[newTable],
                        addons:[newAddons],
                        addonCategories:[newAddonCategory],
                        menuAddonCategories:[newMenuAddonCategory]
                    })
            }
        }
    }else{ 
        return res.status(401).send("unAuthorized");
    }
}