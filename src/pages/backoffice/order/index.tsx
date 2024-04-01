import BackofficeLayout from "@/components/BackofficeLayout";
import { Box, Button } from "@mui/material";

const Order =()=>{
    return (
        <BackofficeLayout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>{}}
                    >
                        New Order
                    </Button>
                </Box>
            </Box>
        </BackofficeLayout>
        )
}

export default Order;