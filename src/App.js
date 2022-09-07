import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import ThemeContext from './context/Theme';


import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => {
  const a=useContext(ThemeContext);
  return(
  <BrowserRouter>
    <Box sx={{ backgroundColor: a.mode?"#000":"#FFF" }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>

)};

export default App;
