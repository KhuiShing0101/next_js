import Layout from "@/components/BackofficeLayout";
import { config } from "@/config";
import { useAppDispatch } from "@/store/hook";
import { setMenuCategories } from "@/store/slices/menuCategorySlice";
import { setMenus } from "@/store/slices/menuSlice";
import {useSession } from "next-auth/react";
import { useEffect } from "react";

 const BackofficeApp =()=>{
    const {data} = useSession();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        fetchAppData()
    },[])
    const fetchAppData=async ()=>{
        const response = await fetch(`${config.backofficeApiBaseUrl}/app`)
        const dataFormServer = await response.json()
        const {menus,menuCategories} = dataFormServer
        dispatch(setMenus(menus));
        dispatch(setMenuCategories(menuCategories));
    }
    return (
            <Layout>
                <h1>Backoffice App {data?.user?.email}</h1>
            </Layout>
        )
}
export default BackofficeApp;