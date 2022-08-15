import React from 'react'

import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

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
import EditMovie from './pages/Admin/EditMovie.jsx'
import AuthAdmin from './pages/Admin/AuthAdmin.jsx'

// Components
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext.js'

// Styles
import './App.css'

function App() {
  const location = useLocation()

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/authadmin" />
  }

  return (
    <>
      <div className="App">
        <div className="navbar">
          {location.pathname === '/admin' ||
          location.pathname === '/admin/users' ||
          location.pathname === '/admin/movies' ||
          location.pathname === '/admin/addMovie' ||
          location.pathname === '/authadmin' ||
          location.pathname === '/admin/editMovie' ? null : (
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
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin bgColor={'#f1f0f6'} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/admin/users"
            element={
              <RequireAuth>
                <Users bgColor={'#f1f0f6'} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/admin/movies"
            element={
              <RequireAuth>
                <Movies bgColor={'#f1f0f6'} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/admin/addMovie"
            element={
              <RequireAuth>
                <AddMovie bgColor={'#f1f0f6'} />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/admin/editMovie"
            element={
              <RequireAuth>
                <EditMovie bgColor={'#f1f0f6'} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/authadmin"
            element={<AuthAdmin bgColor={'#1a1f38'} />}
          ></Route>

          {/* <Route path="/*" element={<ErrorPage />} /> */}
        </Routes>
        {location.pathname === '/admin' ||
        location.pathname === '/admin/users' ||
        location.pathname === '/admin/movies' ||
        location.pathname === '/admin/addMovie' ||
        location.pathname === '/authadmin' ||
        location.pathname === '/admin/editMovie' ? null : (
          <Footer />
        )}
      </div>
    </>
  )
}

export default App
