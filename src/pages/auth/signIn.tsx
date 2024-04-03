import Layout from "@/components/BackofficeLayout"
import { Box, Button } from "@mui/material"
import { signIn } from "next-auth/react"

const SignIn=()=>{
    return (
        <Layout>
            <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                bgcolor:"#ffccd5",
                height:"100%"
            }}>
                <Button variant="contained" 
                    sx={{bgcolor: '#FA4EAB', "&:hover": { bgcolor: "#FE83C6" }}}
                    onClick={()=>signIn("google",{callbackUrl:"/backoffice"})}>
                    Sign In With Google
                </Button>
            </Box>
        </Layout>
        )
}

export default SignIn;