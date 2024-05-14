import { Alert, Box, Button, Checkbox, CircularProgress, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Snackbar, TextField } from "@mui/material"
import { CreateMenuPayload } from "../types/menu";
import { createMenu } from "../store/slices/menuSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { showSnackBar } from "../store/slices/appSnackbarSlice";
import { MenuCategory } from "@prisma/client";


interface props {
    open: boolean,
    newMenu: CreateMenuPayload;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setNewMenu: React.Dispatch<React.SetStateAction<CreateMenuPayload>>
}

export const NewMenuDialog = ({ open, newMenu, setOpen, setNewMenu }: props) => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(state => state.menu);
    const { menuCategories } = useAppSelector(state => state.menuCategory);

    const handleCreateMenu = async () => {
        const isAvaild = newMenu.name && newMenu.menuCategoryIds.length > 0
        if (!isAvaild){
            return;
        } 
        dispatch(
            createMenu({
            ...newMenu,
            onSuccess: () => {
                dispatch(showSnackBar({
                    type: "success",
                    message: "menu created successfully"
                }));
                setOpen(false);
            },
            onError: () => {
                dispatch(showSnackBar({
                    type: "error",
                    message: "error occured"
                }))
            }
        })
        )
    }
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle> New Menu</DialogTitle>
            <DialogContent sx={{   }}>
                <Box>
                    <TextField
                        placeholder="name"
                        sx={{ width: "100%", mb: 2 }}
                        onChange={(evt) => setNewMenu({ ...newMenu, name: evt.target.value })}
                    />
                    <TextField placeholder="price"
                        type="number"
                        sx={{ mb:2, width: "100%" }}
                        onChange={(evt) => setNewMenu({ ...newMenu, price: Number(evt.target.value) })}
                    />

                    <FormControl sx={{  width: "100%" }}>
                        <InputLabel id="demo-multiple-checkbox-label">Menu Category</InputLabel>
                        <Select
                            input={<OutlinedInput label="Menu Category" />}
                            multiple
                            value={newMenu.menuCategoryIds}
                            onChange={(evt)=>{
                                const selected = evt.target.value as number[];
                                setNewMenu({...newMenu, menuCategoryIds:selected});
                            }}
                            renderValue={()=>{
                                const selectedMenuCategories = newMenu.menuCategoryIds.map(
                                    selectedId => menuCategories.find(
                                        item=>item.id === selectedId
                                    ) as MenuCategory
                                )
                                return selectedMenuCategories.map(item=>item.name).join(",");
                            }}
                        >
                            { menuCategories.map((item)=>{
                                return(
                                    <MenuItem key={item.id} value={item.id}>
                                        <Checkbox checked={newMenu.menuCategoryIds.includes(item.id)}/>
                                        <ListItemText primary={item.name} />
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogContent>
                <Button onClick={() => setOpen(false)} sx={{ color: '#FE83C6' }}>cancel</Button>
                <Button
                    variant="contained"
                    sx={{ width: '200', height: '38', bgcolor: '#FA4EAB', "&:hover": { bgcolor: "#FE83C6" } }}
                    onClick={handleCreateMenu}
                >
                Create
                    {/* {isLoading ? <CircularProgress size={20} /> : "Create"} */}
                </Button>
            </DialogContent>
        </Dialog>
    )
}