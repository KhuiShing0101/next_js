import Box from "@mui/material/Box";
import { ReactNode, useEffect } from "react";
import TopBar from "./TopBar";
import { SideBar } from "./SideBar";
import AppSnackbar from "./AppSnackbar";
import { useSession } from "next-auth/react";


interface props{
    children ?: ReactNode
}
  const Layout = ({children}:props)=>{
    const {data} = useSession();
  return(
    <Box sx={{height:"100vh"}}>
      <TopBar/>
      <Box sx={{display:'flex',height:"90%"}}>
        {data && <SideBar/>}
        <Box sx={{width:'100%',p:2}}>
          {children}
        </Box>
      </Box>
      <AppSnackbar/>
    </Box>
  )
}

export default Layout;