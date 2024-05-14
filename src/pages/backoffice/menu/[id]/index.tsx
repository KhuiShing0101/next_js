import BackofficeLayout from "@/components/BackofficeLayout";
import { useAppSelector } from "@/store/hook";
import { UpdateMenuPayload } from "@/types/menu";
import { Box, Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { MenuCategory } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MenuDetail =()=>{
    const router = useRouter();
    const [updateData,setUpdateData] = useState<UpdateMenuPayload>();
    const [selected,setSelected] = useState<number[]>([]);
    const menuId = Number(router.query.id);
    const {menus}  = useAppSelector((state)=>state.menu)
    const {menuCategories}  = useAppSelector((state)=>state.menuCategory)
    const menu = menus.find((item)=>item.id === menuId )
    const {menuCategoryMenus} = useAppSelector(
            (state)=>state.menuCategoryMenu
    )
    const selectedMenuCategoryIds = menuCategoryMenus
        .filter((item) => item.menuId === menuId)
        .map((item) =>{
            const menuCategory = menuCategories
            .find((menuCategory) => menuCategory.id === item.menuCategoryId) as MenuCategory;
            return menuCategory.id
        });

    useEffect(()=>{
        if(menu){
            setUpdateData(menu)
            setSelected(selectedMenuCategoryIds)
        }
    }, [])
    if(!updateData) {
        return (<BackofficeLayout>
            <Typography>Menu Not found</Typography>
        </BackofficeLayout>)
    };
    const handleUpdate = ()=>{}
    return (
        <BackofficeLayout>
            <Box sx={{display:"flex",justifyContent:"flex-end",mb:2}}>
                <Button variant="outlined" color="error" onClick={()=>{}}>
                    Delete
                </Button>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",maxWidth:500, mb:2}}>
                <TextField 
                    sx={{mb:2}}
                    value={updateData.name} 
                    onChange={(evt)=>setUpdateData({...updateData,name:evt.target.value})}
                />
                <TextField 
                    sx={{mb:2}}
                    value={updateData.price} 
                    onChange={(evt)=>setUpdateData({...updateData,price:Number(evt.target.value)})}
                />

            <FormControl sx={{  width: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">Menu Category</InputLabel>
                <Select 
                    multiple
                    value={selected}
                    input={<OutlinedInput label="Menu Category" />}
                    onChange={(evt)=>{
                        const selected = evt.target.value as number[]
                        setSelected(selected);
                    }}
                    renderValue={()=>{
                        return selected
                        .map(
                            (itemId)=>menuCategories.find(
                                (menuCategory)=> menuCategory.id === itemId
                            )as MenuCategory
                        )
                        .map((item)=>item.name)
                        .join(", ");
                    }}
                >
                    {menuCategories.map(item=>{
                        return(
                            <MenuItem key={item.id} value={item.id}>
                                <Checkbox 
                                    checked={selected.includes(item.id)}
                                />
                                <ListItemText>
                                    {item.name}
                                </ListItemText>
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>

            </Box>

            <Button 
                variant="contained" sx={{mt:4, width:"fit-content"}}
                onClick={handleUpdate}
            > 
                Update 
            </Button>
        </BackofficeLayout>
    )
}

export default MenuDetail;