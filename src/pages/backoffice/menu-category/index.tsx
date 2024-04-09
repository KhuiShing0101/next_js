import BackofficeLayout from "@/components/BackofficeLayout";
import { NewMenuCategoryDialog } from "@/components/NewMenuCategoryDialog ";
import { CreateMenuCategoryPayload } from "@/types/menuCategory";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const MenuCategory =()=>{
    const [open, setOpen] = useState<boolean>(false);
    const [newMenuCategory,setNewMenuCategory] = useState<CreateMenuCategoryPayload>({name:"",isAvailable:true})
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
            <NewMenuCategoryDialog open={open} setOpen={setOpen} newMenuCategory={newMenuCategory} setNewMenuCategory={setNewMenuCategory}/>
        </BackofficeLayout>
        )
}

export default MenuCategory;