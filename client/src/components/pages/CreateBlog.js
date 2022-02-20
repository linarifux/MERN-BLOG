import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { Box } from '@mui/system';
import { FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

import {createPost, uploadFile} from '../../service/api';


const CreateBlog = () => {
    const navigate = useNavigate()

    const imgDefault = 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80'

    const [file, setFile] = useState('')
    const [blogImage, setBlogImage] = useState('')

    const initialValue = {
        title: '',
        description: '',
        image: '',
        username: 'linarifux',
        createdDate: new Date(),
        categories: 'All',
    }

    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data = new FormData()
                data.append('name', file.name)
                data.append('file', file)
                const response = await uploadFile(data)
                setBlogImage(response.data)
            }
        }
        getImage()
    }, [file])


    const [post, setPost] = useState(initialValue)

    const handleChange = (e) => {
        post.imageUrl = blogImage
        setPost({...post, [e.target.name]: e.target.value})
    }
    const savePost = async () => {
        const response = await createPost(post)
        if(response){
            return navigate('/')
        }
        navigate('/create')
        
    }


  return (
      <Box padding={{sm: '0px', md: '0px', lg: '0px 200px'}}>
        <Box
            component='img'
            src={blogImage?blogImage:imgDefault}
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
            <label htmlFor="file-input"><AddCircle fontSize='large' color='action' style={{cursor: 'pointer'}} /></label>
            <input type="file" formEncType='multipart/form-data' id='file-input' style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])}/>
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
