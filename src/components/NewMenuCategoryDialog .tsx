import { useAppDispatch, useAppSelector } from "@/store/hook";
import { showSnackBar } from "@/store/slices/appSnackbarSlice";
import { createMenuCategory } from "@/store/slices/menuCategorySlice";
import { CreateMenuCategoryPayload } from "@/types/menuCategory"
import { Alert, Box, Button, Checkbox, CircularProgress, Dialog, DialogContent, DialogTitle, FormControlLabel, Snackbar, TextField, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react";


interface props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setNewMenuCategory: Dispatch<SetStateAction<CreateMenuCategoryPayload>>
    newMenuCategory: CreateMenuCategoryPayload
}

export const NewMenuCategoryDialog = ({ open,setOpen,setNewMenuCategory,newMenuCategory }: props) => {
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(state => state.menu);

    const handleCreateMenuCategory = () =>{
        const isAvalid = newMenuCategory.name
        if(!isAvalid) return;
        dispatch(createMenuCategory({
            ...newMenuCategory,
            onSuccess:()=>{
                dispatch(showSnackBar({
                    type:"success",
                    message:"Menu Category Created Successfully"
                }));
                setOpen(false);
            },
            onError: ()=>{
                dispatch({
                    type:"error",
                    message:"error occured when creating menu-category"
                })
            },
        }))
    }
    
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle> New Menu Category</DialogTitle>
            <DialogContent sx={{ width: 300 }}>
                <Box>
                    <TextField
                        placeholder="name"
                        sx={{ width: "100%", mb: 2 }}
                        onChange={(evt) => setNewMenuCategory({ ...newMenuCategory, name: evt.target.value })}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={newMenuCategory.isAvailable} 
                                onChange={(evt,value)=>
                                    setNewMenuCategory({...newMenuCategory, isAvailable: value})}
                            />
                        }
                        label="Available"
                    />

                </Box>
            </DialogContent>
            <DialogContent>
                <Button onClick={() => setOpen(false)} sx={{ color: '#FE83C6' }}>cancel</Button>
                <Button
                    variant="contained"
                    sx={{ width: '200', height: '38', bgcolor: '#FA4EAB', "&:hover": { bgcolor: "#FE83C6" } }}
                    onClick={(handleCreateMenuCategory)}
                >
                Create
                    {/* {isLoading ? <CircularProgress size={20} /> : "Create"} */}
                </Button>
            </DialogContent>
        </Dialog>
    )
}