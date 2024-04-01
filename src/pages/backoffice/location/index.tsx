import BackofficeLayout from "@/components/BackofficeLayout";
import { NewLocationDialog } from "@/components/NewLocationDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Location =()=>{
    const [open,setOpen] = useState<boolean>(false);
    return (
        <BackofficeLayout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>{setOpen(true)}}
                    >
                        New Location
                    </Button>
                </Box>
                <NewLocationDialog open={open} setOpen={setOpen}/>
            </Box>
        </BackofficeLayout>
        )
}

export default Location;