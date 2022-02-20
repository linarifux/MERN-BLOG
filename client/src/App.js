import { Box } from '@mui/system';
import React, { Component } from 'react';
import Home from './components/home/Home'
import Navbar from './components/Navbar';
import DetailsView from './components/pages/DetailsView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateBlog from './components/pages/CreateBlog';
import UpdateBlog from './components/pages/UpdateBlog'
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Box sx={{marginTop: '64px'}}>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/details/:id' element={<DetailsView />} />
              <Route exact path='/create' element={<CreateBlog />} />
              <Route exact path='/update/:id' element={<UpdateBlog />} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/user/signup' element={<Signup />} />
              <Route exact path='/user/logout' element={<Home />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
