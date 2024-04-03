import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signOut, useSession } from 'next-auth/react';

export default function TopBar() {
  const {data} = useSession();
  return (
    <AppBar position="static" sx={{bgcolor:'#323232',height:'10%'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Foodie POS
        </Typography>
        { data && <Button color="inherit" onClick={()=>signOut()}>Sign Out
        </Button>}
      </Toolbar>
    </AppBar>
  );
}