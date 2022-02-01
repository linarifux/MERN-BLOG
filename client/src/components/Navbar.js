import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <div>
      <AppBar sx={{background: '#FFFFFF', color: 'black'}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}><Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px'}}>HOME</Typography></Link>
            <Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px'}}>ABOUT</Typography>
            <Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px'}}>CONTACT</Typography>
            <Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px'}}>LOGIN</Typography>
          </Toolbar>
        </AppBar>
  </div>;
};

export default Navbar;
