import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Box } from '@mui/system';
import { FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

import {createPost} from '../../service/api';

const CreateBlog = () => {
    const navigate = useNavigate()
    const initialValue = {
        title: '',
        description: '',
        image: '',
        username: 'linarifux',
        createdDate: new Date(),
        categories: 'All'
    }
    const [post, setPost] = useState(initialValue)

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const savePost = async () => {
        await createPost(post)
        navigate('/')
    }

    const url = 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80'
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
            name='title'
            onChange={(e) => handleChange(e)}
            sx={{
                flex: 1,
                margin: '0 30px',
                fontSize: '30px'
            }}/>
            <Button 
            variant='contained'
            onClick={() => savePost()}
            sx={{fontWeight: 700}}>publish</Button>
        </FormControl>
        <TextareaAutosize 
                placeholder='Tell your story......'
                minRows={8}
                onChange={(e) => handleChange(e)}
                name='description'
                style={{width: '100%', marginTop: '50px', fontSize: '18px', border: 'none', outline: 'none'}}
            />
      </Box>
  )
};

export default CreateBlog;
