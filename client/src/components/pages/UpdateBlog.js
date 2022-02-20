import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { getPostById, updateBlog, uploadFile } from '../../service/api';

const UpdateBlog = () => {
    const [file, setFile] = useState('')
    const [blogImage, setBlogImage] = useState('')
    const initialValue = {
        title: '',
        description: '',
        image: '',
        username: 'linarifux',
        createdDate: new Date(),
        categories: 'All'
    }

    const [post, setPost] = useState(initialValue)

    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data = new FormData()
                data.append('name', file.name)
                data.append('file', file)
                const response = await uploadFile(data)
                setBlogImage(response.data)
                setPost(post => {
                    post.imageUrl = response.data
                    return post
                })
            }
        }
        getImage()
    }, [file])

    
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPostById(id)
            setPost(response)
        }
        fetchData()
    }, [id])

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate()

    const updatePost = async () => {
        await updateBlog(id, post)
        navigate(`/details/${id}`)
    }

  return (
      <Box padding={{sm: '0px', md: '0px', lg: '0px 200px'}}>
        <Box
            component='img'
            src={blogImage?blogImage:post.imageUrl}
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
            value={post.title}
            onChange={(e) => handleChange(e)}
            sx={{
                flex: 1,
                margin: '0 30px',
                fontSize: '30px'
            }}/>
            <Button variant='contained' sx={{fontWeight: 700}} onClick={() => updatePost() }>Update</Button>
        </FormControl>
        <TextareaAutosize 
                value={post.description}
                name='description'
                onChange={(e) => handleChange(e)}
                placeholder='Tell your story......'
                minRows={8}
                style={{width: '100%', marginTop: '50px', fontSize: '18px', border: 'none', outline: 'none'}}
            />
      </Box>
  )
};

export default UpdateBlog;
