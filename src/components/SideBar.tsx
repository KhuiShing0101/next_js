import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';
import SettingsIcon from '@mui/icons-material/Settings';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TableBarIcon from '@mui/icons-material/TableBar';
import EggIcon from '@mui/icons-material/Egg';
import Link from "next/link";

const sidebarItems =[
    {id:1, label: "Order", route:"/backoffice/order",icon: <LocalMallIcon/>},
    {id:2, label: "Menus", route:"/backoffice/menu",icon: <LocalDiningIcon/>},
    {id:3, label:"Menu Categories", route:"/backoffice/menu-category",icon:<CategoryIcon/>},
    {id:4, label: "Addon Categories", route:"/backoffice/addon-category",icon: <ClassIcon/>},
    {id:5, label: "Addons", route:"/backoffice/addon",icon: <EggIcon/>},
    {id:6, label:"Tables", route:"/backoffice/table",icon:<TableBarIcon/>},
    {id:7, label: "Location", route:"/backoffice/location",icon: <LocationOnIcon/>},
]
export function SideBar(){
    return(
        <Box sx={{height:"100vh",bgcolor:"#FA4EAB"}}> 
            <Box sx={{ width: 300 }} role="presentation">
                <List>
                    {sidebarItems.map((item,index) => (
                    <Link href={item.route} style={{textDecoration:"none"}} key={item.id}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{color:"#FFF2F9"}}>
                                {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.label} sx={{color:"#FFF2F9"}}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    <Link href={"/backoffice/setting"} style={{textDecoration:"none"}}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ color:"#FFF2F9"}}>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Settings"} sx={{color:"#FFF2F9"}}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Box>
    )
}