import Layout from "@/components/BackofficeLayout";
import { Button } from "@mui/material";
import {useSession } from "next-auth/react";

 const BackofficeApp =()=>{
    const {data} = useSession();
    return (
            <Layout>
                <h1>Backoffice App {data?.user?.email}</h1>
            </Layout>
            )
}
export default BackofficeApp;