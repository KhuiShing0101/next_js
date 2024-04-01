import BackofficeLayout from "@/components/BackofficeLayout";
import { NewMenuCategoryDialog } from "@/components/NewMenuCategoryDialog ";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const MenuCategory =()=>{
    const [open, setOpen] = useState<boolean>(false);
    return (
        <BackofficeLayout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>{setOpen}}
                    >
                        New Menu Category
                    </Button>
                </Box>
            </Box>
            <NewMenuCategoryDialog open={open} setOpen={setOpen}/>
        </BackofficeLayout>
        )
}

export default MenuCategory;