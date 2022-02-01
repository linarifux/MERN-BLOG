import { Box, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../service/api';
const DetailsView = (props) => {
  const url = 'https://cdn.lifehack.org/wp-content/uploads/2015/01/workstation-405768_1280.jpg'

  const [post, setPost] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const {id} = useParams()
  const {title,description,author,createdDate} = post

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPostById(id) 
      setPost(response)
      setIsLoaded(true)
    }
    fetchData()
  }, [id])
  return (
      <Box padding={{sm: '0px', md: '0px', lg: '0px 200px'}}>
        <Box
          component="img"
          src={url}
          alt="wrapper"
          sx={{
            width: '100%',
            height: '50vh',
            objectFit: 'cover'
          }}
        ></Box>
        <Box sx={{float: 'right'}}>
          <Link to={`/update/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}} ><Edit color='primary' style={{padding: '5px', border: '1px solid #878787', margin: '5px', borderRadius: '10px'}}/></Link>
          <Delete color='error' style={{padding: '5px', border: '1px solid #878787', margin: '5px', borderRadius: '10px'}}/>
        </Box>
        <Typography sx={{
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
          <Typography>Author: <span style={{fontWeight: 700}}>{author}</span></Typography>
          <Typography style={{marginLeft: 'auto'}}>{isLoaded?`${new Date(createdDate).toDateString()}`:`Loading`}</Typography>
        </Box>
        <Typography>{description}</Typography>
      </Box>
  );
};

export default DetailsView;
