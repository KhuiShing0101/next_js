import BackofficeLayout from "@/components/BackofficeLayout";
import { NewAddonCategoryDiaglog } from "@/components/NewAddonCategoryDiaglog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const AddonCategory =()=>{
    const [open,setOpen] = useState<boolean>(false);
    return (
        <BackofficeLayout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>{setOpen(true)}}
                    >
                        New Addon Category
                    </Button>
                </Box>
            </Box>
            <NewAddonCategoryDiaglog open={open} setOpen={setOpen}/>
        </BackofficeLayout>
        )
}

export default AddonCategory;