import BackofficeLayout from "@/components/BackofficeLayout";
import ItemCard from "@/components/ItemCard";
import { NewMenuCategoryDialog } from "@/components/NewMenuCategoryDialog ";
import { useAppSelector } from "@/store/hook";
import menuCategorySlice from "@/store/slices/menuCategorySlice";
import { CreateMenuCategoryPayload } from "@/types/menuCategory";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";

const MenuCategory =()=>{
    const {company} = useAppSelector(state=>state.company);
    const [open, setOpen] = useState<boolean>(false);
    const {menuCategories} = useAppSelector(state=>state.menuCategory)
    const [newMenuCategory,setNewMenuCategory] = 
        useState<CreateMenuCategoryPayload>(
        {
            name:"",
            isAvailable:true,
            companyId:company?.id,
        }) 
    return (
        <BackofficeLayout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>{setOpen(true)}}
                    >
                        New Menu Category
                    </Button>
                </Box>
            </Box>
            <Box sx={{display:"flex"}}>
                {menuCategories.map((item)=><ItemCard 
                    key={item.id}
                    icon={<CategoryIcon/>} 
                    title={item.name} 
                    href={`menu-category/${item.id}`}
                />)}
            </Box>
            <NewMenuCategoryDialog open={open} setOpen={setOpen} newMenuCategory={newMenuCategory} setNewMenuCategory={setNewMenuCategory}/>
        </BackofficeLayout>
        )
}

export default MenuCategory;