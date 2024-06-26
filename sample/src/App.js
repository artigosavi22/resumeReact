// import logo from './logo.svg';
import React from 'react';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/portfolio/Portfolio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './pages/resume/Resume';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7} > 
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
          <Header />
            <div className='main-content container_shadow'>
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
