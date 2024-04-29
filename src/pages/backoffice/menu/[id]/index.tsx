import BackofficeLayout from "@/components/BackofficeLayout";
import { useAppSelector } from "@/store/hook";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const MenuDetail =()=>{
    const router = useRouter();
    const menuId = Number(router.query.id);
    const {menus}  = useAppSelector((state)=>state.menu)
    const menu = menus.find((item)=>item.id === menuId )
    if(!menu) {
        return (<BackofficeLayout>
            <Typography>Menu Not found</Typography>
        </BackofficeLayout>)
    };
    return (
        <BackofficeLayout>
            <Typography>
                Menu Category Detail{menu.id}
            </Typography>
        </BackofficeLayout>
    )
}

export default MenuDetail;