import BackofficeLayout from "@/components/BackofficeLayout";
import ItemCard from "@/components/ItemCard";
import { NewMenuDialog } from "@/components/NewMenuDialog";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { CreateMenuPayload} from "@/types/menu";
import { RestaurantMenuSharp } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Menu =()=>{
    const [open,setOpen] = useState(false);
    const {menus} = useAppSelector(state=>state.menu)
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
                    <Box>
                        { menus.map(
                            (item)=><ItemCard 
                                    key={item.id}
                                    icon={<LocalDiningIcon/>} 
                                    title={item.name} 
                                    href={`menu-category/${item.id}`}
                                />
                            )
                        }
                    </Box>
                    <NewMenuDialog open={open} newMenu={newMenu} setOpen={setOpen} setNewMenu={setNewMenu}/>
                </Box>
            </BackofficeLayout>
        )
}

export default Menu;