import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'sweetalert2/dist/sweetalert2.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'   
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Pricing from './pages/home/Pricing.jsx'
import Services from './pages/home/Services.jsx'
import Blogs from './pages/home/Blogs.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './context/AuthContext.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import UpEvents from './pages/home/UpEvents.jsx'
import About from './pages/home/About.jsx'
import Contact from './pages/home/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home></Home>} />
          <Route path='/membership' element={<div>{<Pricing />}</div>} />
          <Route path='/services' element={<div>{<Services />}</div>} />
          <Route path='/blog' element={<div>{<Blogs />}</div>} />
          <Route path='/upevents' element={<div>{<UpEvents/>}</div>} />
          <Route path='/about' element={<div>{<About/>}</div>} />
          <Route path='/contact' element={<div>{<Contact/>}</div>} />


          <Route path='*' element={<div><ErrorPage /></div>} />

        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)
