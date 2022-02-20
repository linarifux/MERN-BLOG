import React, {useEffect, useState} from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token')
  const [isToken, setIsToken] = useState(false)

  useEffect(() => {
    if(token){
      setIsToken(true)
    }else{
      setIsToken(false)
    }
  }, [token])

  const navigate = useNavigate()
  const logOut = () => {
    localStorage.clear('token')
    navigate('/login')
  }


  return <div>
      <AppBar sx={{background: '#FFFFFF', color: 'black'}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}><Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px'}}>HOME</Typography></Link>
            <Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px'}}>ABOUT</Typography>
            <Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px'}}>CONTACT</Typography>
            <Link to={'/login'} style={{textDecoration: 'none', color: 'inherit'}}><Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px', display: `${isToken?'none':'block'}`}}>LOGIN</Typography></Link>
            <Typography sx={{padding: '20px', fontWeight: '600', fontSize: '20px', display: `${isToken?'block':'none'}`, cursor: 'pointer'}} onClick={() => logOut()} >LOGOUT</Typography>
          </Toolbar>
        </AppBar>
  </div>;
};

export default Navbar;
