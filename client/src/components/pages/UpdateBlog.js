import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { getPostById } from '../../service/api';

const CreateBlog = () => {
    const url = 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80'

    const [post, setPost] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPostById(id)
            console.log(response);
            setPost(response)
        }
        fetchData()
    }, [])
  return (
      <Box padding={{sm: '0px', md: '0px', lg: '0px 200px'}}>
        <Box
            component='img'
            src={url}
            sx={{
                width: '100%',
                height: '50vh',
                objectFit: 'cover'
              }}
            >
        </Box>
        <FormControl sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10px'
        }}>
            <AddCircle fontSize='large' color='action'/>
            <InputBase placeholder='Title '
            value={post.title}
            sx={{
                flex: 1,
                margin: '0 30px',
                fontSize: '30px'
            }}/>
            <Button variant='contained' sx={{fontWeight: 700}}>Update</Button>
        </FormControl>
        <TextareaAutosize 
                value={post.description}
                placeholder='Tell your story......'
                minRows={8}
                style={{width: '100%', marginTop: '50px', fontSize: '18px', border: 'none', outline: 'none'}}
            />
      </Box>
  )
};

export default CreateBlog;
