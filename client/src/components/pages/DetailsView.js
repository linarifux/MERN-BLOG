import { Box, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import {Link, useNavigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { deletePost, getPostById } from '../../service/api';
const DetailsView = () => {

  const [post, setPost] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const {id} = useParams()
  const {title,description,username,createdDate, imageUrl} = post
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPostById(id) 
      setPost(response)
      setIsLoaded(true)
    }
    fetchData()
  }, [id])

  const navigate = useNavigate()

  const deleteBlog = async () => {
    await deletePost(id)
    navigate('/')
  }
  return (
      <Box padding={{sm: '0px', md: '0px', lg: '0px 400px'}}>
        <Box
          component="img"
          src={imageUrl}
          alt="wrapper"
          sx={{
            width: '100%',
            height: '600px',
            objectFit: 'cover'
          }}
        ></Box>
        {token?<Box sx={{float: 'right'}}>
          <Link to={`/update/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}} ><Edit color='primary' style={{padding: '5px', border: '1px solid #878787', margin: '5px', borderRadius: '10px'}}/></Link>
          <Delete onClick={() => deleteBlog()} color='error' style={{padding: '5px', border: '1px solid #878787', margin: '5px', borderRadius: '10px', cursor: 'pointer'}}      />
        </Box>:''}
        <Typography  sx={{
          margin: '20px 0',
          textAlign: 'center',
          fontSize: '30px',
          fontWeight: 700,
        }}>{title}</Typography>
        <Box sx={{
          display: 'flex',
          color: '#878787',
          margin: '10px 0'
        }}>
          <Typography>Author: <Link to={`/?username=${username}`} style={{textDecoration: 'none', color: 'inherit'}}><span style={{fontWeight: 700}}>{username}</span></Link></Typography>
          <Typography style={{marginLeft: 'auto'}}>{isLoaded?`${new Date(createdDate).toDateString()}`:`Loading`}</Typography>
        </Box>
        <Typography>{description}</Typography>
      </Box>
  );
};

export default DetailsView;
