import { Box, FormControl, InputBase, Button } from '@mui/material'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewuser } from '../../service/api'

const Signup = () => {
    const initialUser = {
        fullName: '',
        username: '',
        email: '',
        password: ''
    }
    const [user, setUser] = useState(initialUser)

    const handleOnChange = (e) => {
        setUser({...user,[e.target.name] : e.target.value})
    }

    const navigate = useNavigate()
    
    const createUser = () => {
        createNewuser(user)
        navigate('/login')
    }
  return (
    <Box sx={{maxWidth: '30vw', margin: '200px auto', border: '1px solid #878787', borderRadius: '5px', padding: '20px'}}>
        <FormControl sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '10px auto',
            maxWidth: '20vw'
        }}>
            <InputBase
             name='fullName'
             onChange={(e) => handleOnChange(e)}
             placeholder='Full Name' sx={{borderBottom: '1px solid #878787', padding: '0 10px', marginBottom: '10px'}}></InputBase>
            <InputBase
             name='username'
             onChange={(e) => handleOnChange(e)}
             placeholder='username' sx={{borderBottom: '1px solid #878787', padding: '0 10px', marginBottom: '10px'}}></InputBase>
            <InputBase
             name='email'
             onChange={(e) => handleOnChange(e)}
             placeholder='email' sx={{borderBottom: '1px solid #878787', padding: '0 10px', marginBottom: '10px'}}></InputBase>
            <InputBase
             name='password'
             type='password'
             onChange={(e) => handleOnChange(e)}
             placeholder='Password' sx={{borderBottom: '1px solid #878787', padding: '0 10px', marginBottom: '10px'}}></InputBase>
            <Box sx={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                <Button variant='contained' onClick={() => createUser()}>Signup</Button>
            </Box>
        </FormControl>
    </Box>
  )
}

export default Signup