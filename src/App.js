import React, { useEffect, useState } from 'react'
import './App.css';
import HeaderPage from './pages/HeaderPage';
import CreateBlog from './components/CreateBlog';
import { Route, Routes } from 'react-router-dom';
import Allblogs from './components/Allblogs';
import Error from './pages/Error';
import HomePage from './pages/HomePage';
import Login from './Authentication/Login';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import About from './pages/About';
import BlogInfo from './bloggingInfo/BlogInfo';
import BlogSchedul from './bloggingInfo/BlogSchedul';
import Preloader from './pages/Preloader';


function App() {

  const [loading, setloading] = useState(false)

  setTimeout(() => {
    setloading(true)
  }, 3000)

  return (
    <>
      {
        loading ? <div className="App">
          <HeaderPage />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/creatblog' element={<CreateBlog />} />
            <Route exact path='/allblogs' element={<Allblogs />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/setting' element={<Setting />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='*' element={<Error />} />
            <Route exact path='/about/bloginfo' element={<BlogInfo />} />
            <Route exact path='/about/schedule' element={<BlogSchedul />} />

          </Routes>

        </div> : <Preloader />
      }

    </>
  );
}

export default App;
