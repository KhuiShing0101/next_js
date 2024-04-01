import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function TopBar() {
  const router = useRouter();
  return (
    <AppBar position="static">
      <Toolbar sx={{bgcolor:'#323232'}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Foodie POS
        </Typography>
        <Button color="inherit" >Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}