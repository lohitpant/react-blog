import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import CreatePostWrapper from './pages/CreatePostWrapper';
import CreatePost from './pages/CreatePost';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  return (
    <div className='app'>
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

        <div className='app-wrapper'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreatePostWrapper isAuth={isAuth} Comp={CreatePost}
              path='/login' />} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/blog' element={<BlogPost isAuth={isAuth} />} />
          </Routes>

        </div>

        <Footer />

      </Router >

    </div>
  );
}

export default App;
