import React from 'react';
import Banner from  './Banner'
import { Grid } from '@mui/material';
import Categories from './Categories';
import Posts from './Posts';

const Home = () => {
  return (
      <>
        <Banner></Banner>
        <Grid container>
            <Grid item lg={2} xs={12} sm={2}><Categories></Categories></Grid>
            <Grid container lg={10} xs={12} sm={10}><Posts /></Grid>
        </Grid>
      </>
  );
};

export default Home;
