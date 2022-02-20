import React, {useState, useEffect} from 'react';
import {getAllPosts} from '../../service/api'
import Post from './Post';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const {search} = useLocation()
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPosts(search)
      setPosts(response.data)
      setIsLoaded(true)
      console.log(search);
    }
    fetchData()
  }, [search])
  if(!isLoaded){
    return <Box sx={{fontSize: '40px', display: 'flex', justifyContent: 'center', maxWidth: '30vh'}}>Loading</Box>
  }
  return (
      posts.map((post, index) => {
          return(
              <Grid item lg={3} sm={6} xs={12}>
                <Link to={`/details/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}}><Post post={post} key={index}/></Link>
              </Grid>
          )
      })
  );
};

export default Posts;
