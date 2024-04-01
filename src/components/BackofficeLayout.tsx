import Box from "@mui/material/Box";
import { ReactNode, useEffect } from "react";
import TopBar from "./TopBar";
import { SideBar } from "./SideBar";
import AppSnackbar from "./AppSnackbar";


interface props{
    children ?: ReactNode
}
  const Layout = ({children}:props)=>{
  return(
    <Box>
      <TopBar/>
      <Box sx={{display:'flex',height:"100vh"}}>
        <SideBar/>
        <Box sx={{width:'100%',p:2}}>
          {children}
        </Box>
      </Box>
      <AppSnackbar/>
    </Box>
  )
}

export default Layout;