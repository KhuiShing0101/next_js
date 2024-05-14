import BackofficeLayout from "@/components/BackofficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { showSnackBar } from "@/store/slices/appSnackbarSlice";
import { updateMenuCategory } from "@/store/slices/menuCategorySlice";
import { updateMenuCategoryPayload } from "@/types/menuCategory";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MenuCategoryDetail=()=>{
    const [updateData,setUpdateData] = useState<updateMenuCategoryPayload>();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const menuCategoryId = Number(router.query.id)
    const {menuCategories} = useAppSelector((state)=>state.menuCategory);
    const menuCategory = menuCategories.find(
        (item) => item.id === menuCategoryId
    )

    useEffect(()=>{
        if(menuCategory){
            setUpdateData(menuCategory);
        }
    },[])

    const handleUpdate = ()=>{
        const shouldUpdate = updateData?.name !== menuCategory?.name || updateData?.isAvailable !== menuCategory?.isAvailable
        if(!shouldUpdate) {
            return router.push("/backoffice/menu-category");
        };
        updateData && dispatch(updateMenuCategory({...updateData,onSuccess: ()=>{
            dispatch(showSnackBar({
                type: "success",
                message: "menu-category updated successfully"
            }));
            router.push("/backoffice/menu-category");
        }}));
    }

    if(!updateData){
        return (<BackofficeLayout>
            Menu Category Not Found
        </BackofficeLayout>)
    };
    return(
        <BackofficeLayout>
            <Box sx={{display:"flex",justifyContent:"flex-end",mb:2}}>
                <Button variant="outlined" color="error" onClick={()=>{}}>
                    Delete
                </Button>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",maxWidth:500}}>
                <TextField 
                    value={updateData.name} 
                    onChange={(evt)=>setUpdateData({...updateData,name:evt.target.value})}
                >
                </TextField>
                <FormControlLabel
                    control={
                        <Checkbox checked={updateData.isAvailable}
                            onChange={(evt,value)=>setUpdateData({...updateData,isAvailable:value})}
                        />
                    }
                    label="Available"
                />
                <Button 
                    variant="contained" sx={{mt:4, width:"fit-content"}}
                    onClick={handleUpdate}
                > 
                    Update 
                </Button>
            </Box>
        </BackofficeLayout>
    )
}
export default MenuCategoryDetail;