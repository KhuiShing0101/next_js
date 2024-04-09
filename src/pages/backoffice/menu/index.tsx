import BackofficeLayout from "@/components/BackofficeLayout";
import { NewMenuDialog } from "@/components/NewMenuDialog";
import { CreateMenuPayload} from "@/types/menu";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Menu =()=>{
    const [open,setOpen] = useState(false);
    const [newMenu,setNewMenu] = useState<CreateMenuPayload>({name:"",price:0})
    return (
            <BackofficeLayout>
                <Box>
                    <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                        <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                            onClick={()=>setOpen(true)}
                        >
                            New Menu
                        </Button>
                    </Box>
                    <NewMenuDialog open={open} newMenu={newMenu} setOpen={setOpen} setNewMenu={setNewMenu}/>
                </Box>
            </BackofficeLayout>
        )
}

export default Menu;