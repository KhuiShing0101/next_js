import BackofficeLayout from "@/components/BackofficeLayout";
import { NewTableDialog } from "@/components/NewTableDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Table =()=>{
    const [open,setOpen] = useState<boolean>(false);
    return (
        <BackofficeLayout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>{setOpen(true)}}
                    >
                        New Table
                    </Button>
                </Box>
            </Box>
            <NewTableDialog open={open} setOpen={setOpen} />
        </BackofficeLayout>
        )
}

export default Table;