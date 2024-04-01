import BackofficeLayout from "@/components/BackofficeLayout";
import { NewAddonDiaglog } from "@/components/NewAddonDiaglog ";
import { NewMenuDialog } from "@/components/NewMenuDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Addon =()=>{
    const [open,setOpen] = useState<boolean>(false);
    return (
        <BackofficeLayout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>{setOpen(true)}}
                    >
                        New Addon
                    </Button>
                </Box>
                <NewAddonDiaglog open={open} setOpen={setOpen}/>
            </Box>
        </BackofficeLayout>
        )
}

export default Addon;