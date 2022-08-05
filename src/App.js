import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

// Pages
import Home from './pages/Home/Home.jsx'
import Movie from './pages/Movie/Movie.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Registration from './pages/Registration/Registration.jsx'
import Login from './pages/Login/Login.jsx'
import Forgot from './pages/Forgot_a_password/Forgot.jsx'
import Admin from './pages/Admin/Admin.jsx'
import Users from './pages/Admin/Users.jsx'
import Movies from './pages/Admin/Movies.jsx'
import AddMovie from './pages/Admin/AddMovie.jsx'

// Components

// Styles
import './App.css'

// comps
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="App">
        <div className="navbar">
          {location.pathname === '/admin' ||
          location.pathname === '/admin/users' ||
          location.pathname === '/admin/movies' ||
          location.pathname === '/admin/addMovie' ? null : (
            <NavBar />
          )}
        </div>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/admin" element={<Admin bgColor={'#f1f0f6'} />}></Route>
          <Route
            path="/admin/users"
            element={<Users bgColor={'#f1f0f6'} />}
          ></Route>
          <Route
            path="/admin/movies"
            element={<Movies bgColor={'#f1f0f6'} />}
          ></Route>
          <Route
            path="/admin/addMovie"
            element={<AddMovie bgColor={'#f1f0f6'} />}
          ></Route>
          {/* <Route path="/*" element={<ErrorPage />} /> */}
        </Routes>
        {location.pathname === '/admin' ||
        location.pathname === '/admin/users' ||
        location.pathname === '/admin/movies' ||
        location.pathname === '/admin/addMovie' ? null : (
          <Footer />
        )}
      </div>
    </>
  )
}

export default App
