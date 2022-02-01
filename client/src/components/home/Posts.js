import React, {useState, useEffect} from 'react';
import {getAllPosts} from '../../service/api'
import Post from './Post';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPosts()
      setPosts(response.data)
    }
    fetchData()
  }, [])
  return (
      posts.map(post => {
          return(
              <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/details/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}}><Post post={post}/></Link>
              </Grid>
          )
      })
  );
};

export default Posts;
