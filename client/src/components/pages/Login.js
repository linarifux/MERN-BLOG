import { Box, FormControl, Button } from '@mui/material'
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { loginUser } from '../../service/api'

const Login = () => {
  const initialUser = {
    username: '',
    password: ''
  }
  const [user, setUser] = useState(initialUser)
  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()
  const userLogin = async (e) => {
    e.preventDefault()
    const response = await loginUser(user)
    if(response === undefined){
      setUser(initialUser)
      navigate('/login')
      return;
    }
    navigate('/')
    
  }
  return (
    <Box sx={{maxWidth: '30vw', margin: '200px auto', border: '1px solid #878787', borderRadius: '5px', padding: '20px'}}>
        <FormControl sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '10px auto',
            maxWidth: '20vw'
        }}>
          <input type="text"
            name='username'
            value={user.username}
            onChange={(e) => handleOnChange(e)}
            placeholder='Username' style={{border: 'none', borderBottom: '1px solid #878787', padding: '10px', marginBottom: '10px', outline: 'none', fontSize: '18px'}} />
          <input type="password"
            name='password'
            value={user.password}
            onChange={(e) => handleOnChange(e)}
            placeholder='Password' style={{border: 'none', borderBottom: '1px solid #878787', padding: '10px', outline: 'none', fontSize: '18px'}} />
          
            <Box sx={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant='contained' type='submit' onClick={(e) => userLogin(e)}>Login</Button>
                <Link to={'/user/signup'} style={{textDecoration: 'none', color: 'inherit'}} ><Button variant='contained'>Signup</Button></Link>
            </Box>
        </FormControl>
    </Box>
  )
}

export default Login