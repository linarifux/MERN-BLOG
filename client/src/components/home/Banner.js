import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
  const url = 'https://wallpaperaccess.com/full/1657858.jpg'
  return (
    <Box sx={{background: `url(${url}) center no-repeat`, height: '40vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography sx={{fontSize: '50px', color: '#000', fontWeight: '700', borderBottom: '2px solid #fff', marginBottom: '10px'}}>BLOG</Typography>
      <Typography sx={{fontSize: '25px', backgroundColor: '#fff', padding: '5px', borderRadius: '5px', marginTop: '10px'}}>Void Productions</Typography>
    </Box>
  );
};

export default Banner;
