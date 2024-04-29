import Layout from "@/components/BackofficeLayout";
import { useAppDispatch } from "@/store/hook";
import { fetchAppData } from "@/store/slices/appSlice";
import {useSession } from "next-auth/react";
import { useEffect } from "react";

 const BackofficeApp =()=>{
    const {data} = useSession();
    return (
            <Layout>
                <h1>Backoffice App {data?.user?.email}</h1>
            </Layout>
        )
}
export default BackofficeApp;