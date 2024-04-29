import { config } from "@/config";
import { AppSlice } from "@/types/app";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMenus } from "./menuSlice";
import { setMenuCategories } from "./menuCategorySlice";
import { setCompany } from "./companySlice";

const initialState:AppSlice ={
  init: false, 
  isLoading: false,
  error: null  
}

export const fetchAppData = createAsyncThunk("app/fetchAppData",async(_, thunkApi)=>{
    const response = await fetch(`${config.backofficeApiBaseUrl}/app`)
        const dataFormServer = await response.json()
        const {menus,menuCategories,company} = dataFormServer
        thunkApi.dispatch(setMenus(menus));
        thunkApi.dispatch(setMenuCategories(menuCategories));
        thunkApi.dispatch(setInit(true));
        thunkApi.dispatch(setCompany(company));
},)
export const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
      setInit:(state,action: PayloadAction<boolean>)=>{
        state.init = action.payload
      }
    }
});

export const {setInit} = appSlice.actions;

export default appSlice.reducer;