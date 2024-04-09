import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MenuCategory, CreateMenuCategoryPayload } from "../../types/menuCategory";
import { config } from "@/config";

interface MenuCategorySlice{
    menuCategories:MenuCategory[];
    isLoading:boolean;
    error:Error | null
}

const initialState:MenuCategorySlice={
    menuCategories:[],
    isLoading:false,
    error:null
}
export const createMenuCategory = createAsyncThunk("menuCategory/createMenuCategory",
    async (payload:CreateMenuCategoryPayload,thunkApi)=>{
        const{onSuccess} = payload;
        const response = await fetch(`${config.backofficeApiBaseUrl}/menu-category`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(payload),
        })
        const dataFromServer = await response.json();
        const {menuCategory} = dataFromServer;
        onSuccess && onSuccess();
        // console.log(menuCategory);
        // return menuCategory;
        thunkApi.dispatch(addMenuCategory(menuCategory));
    })

export const menuCategorySlice = createSlice({
    name: "menuCategory",
    initialState,
    reducers:{
        setMenuCategories:(state,action:PayloadAction<MenuCategory[]>)=>{
            state.menuCategories =action.payload;
        },
        addMenuCategory:(state,action:PayloadAction<MenuCategory>)=>{
            state.menuCategories = [...state.menuCategories,action.payload];
        },
        removeMenuCategory:(state,action:PayloadAction<MenuCategory>)=>{
            state.menuCategories = state.menuCategories.filter((menuCategory)=>menuCategory.id === action.payload.id ? false : true)
        }
    }
})

export const {setMenuCategories,addMenuCategory,removeMenuCategory} = menuCategorySlice.actions;

export default menuCategorySlice.reducer;