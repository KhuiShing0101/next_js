import { Alert, Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Snackbar, TextField, Typography } from "@mui/material"


interface props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewAddonDiaglog = ({ open,setOpen }: props) => {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Addon Title</DialogTitle>
            <DialogContent>
                <Typography>
                New Addon Diaglog Content
                </Typography>
            </DialogContent>
            <DialogContent>
                <Button onClick={() => setOpen(false)} sx={{ color: '#FE83C6' }}>cancel</Button>
                <Button
                    variant="contained"
                    sx={{ width: '200', height: '38', bgcolor: '#FA4EAB', "&:hover": { bgcolor: "#FE83C6" } }}
                    onClick={()=>{}}
                >
                    Create
                </Button>
            </DialogContent>
        </Dialog>
    )
}