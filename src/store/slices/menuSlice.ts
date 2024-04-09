
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Menu, CreateMenuPayload } from "../../types/menu";
import { config } from "@/config";

interface menuSlice{
    menus:Menu[];
    isLoading:boolean;
    error:string | null;
}

const initialState:menuSlice={
    menus:[],
    isLoading:false,
    error:null
}

export const createMenu = createAsyncThunk("menu/createMenu",
    async(payload:CreateMenuPayload,thunkApi)=>{
        const { onSuccess } = payload;
        const response = await fetch(`${config.backofficeApiBaseUrl}/menu`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({...payload})
        })
        const serverFromData = await response.json();
        const {menu} = serverFromData;
        onSuccess && onSuccess();
        return menu
    })

export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        setMenus:(state,action:PayloadAction<Menu[]>)=>{
            state.menus = action.payload;
        },
        addMenu:(state,action:PayloadAction<Menu>)=>{
            state.menus = [...state.menus,action.payload]
        },
        removeMenu:(state,action:PayloadAction<Menu>)=>{
            state.menus = state.menus.filter((menu)=> menu.id === action.payload.id ? false : true);
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createMenu.pending,(state,action)=>{
            state.isLoading= true;
            state.error = null;
        })
        .addCase(createMenu.fulfilled,(state,action) =>{
            // console.log(action.payload);
            state.menus = [...state.menus,action.payload]
            state.isLoading= false;
        })
        .addCase(createMenu.rejected,(state,action)=>{
            state.isLoading = false;
            const e = new Error("create menu error occoured")
            state.error = e.message
        })
    }
})

export const {setMenus,addMenu,removeMenu} = menuSlice.actions;

export default menuSlice.reducer;