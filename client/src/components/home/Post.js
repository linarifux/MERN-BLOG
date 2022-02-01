import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Post = ({post}) => {
    const url = 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762__340.jpg'
    const {title,description,categories,author} = post
  return (
      <Box sx={{
        height: '350px',
        margin: '10px',
        borderRadius: '10px',
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90%'
      }}>
          <Box
        component="img"
        sx={{
          height: '200px',
          width: '100%',
          objectFit:'cover',
          borderRadius: '10px 10px 0 0'

        }}
        alt="Wrapper"
        src={url}
      />
          <Box sx={{padding: '10px', textAlign: 'center'}}>
            <Typography sx={{color: '#878787', marginBottom: '10px', fontSize: '15px', textDecoration: 'none'}}>{categories}</Typography>
            <Typography sx={{margin: '5px 0', fontWeight: 600, textDecoration: 'none'}}>{title}</Typography>
            <Typography sx={{color: '#878787', fontSize: '15px', textDecoration: 'none'}}>{author}</Typography>
            <Typography sx={{wordBreak: 'break-word', textAlign: 'left', textDecoration: 'none'}}>{description}</Typography>
          </Box>
      </Box>
  );
};

export default Post;
