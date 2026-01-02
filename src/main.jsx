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
import { AlumniAuthProvider } from './context/AlumniAuthContext.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import UpEvents from './pages/home/UpEvents.jsx'
import About from './pages/home/About.jsx'
import Contact from './pages/home/Contact.jsx'
import AlumniEvents from './pages/home/AlumniEvents.jsx'
import ReunionEvents from './pages/home/ReunionEvents.jsx'
import DepartmentalReunionEvents from './pages/home/DepartmentalReunionEvents.jsx'
import CareerEvents from './pages/home/CareerEvents.jsx'
import IftaarEvents from './pages/home/IftaarEvents.jsx'
import LeadershipDetail from './pages/home/LeadershipDetail.jsx'
import TeamSection from './pages/home/TeamSection.jsx'
import AlumniLogin from './components/AlumniLogin.jsx'
import AlumniDashboard from './components/AlumniDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>

      <BrowserRouter>
      <AlumniAuthProvider>
        <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home></Home>} />
          <Route path='/membership' element={<div>{<Pricing />}</div>} />
          <Route path='/services' element={<div>{<Services />}</div>} />
          <Route path='/blog' element={<div>{<Blogs />}</div>} />
          <Route path='/upevents' element={<div>{<UpEvents/>}</div>} />
          <Route path='/about' element={<div>{<About/>}</div>} />
          <Route path='/contact' element={<div>{<Contact/>}</div>} />
          {/* <Route path="/events/alumni-events" element={<AlumniEvents />} /> */}
          {/* <Route path="/events/reunion" element={<ReunionEvents />} /> */}
          <Route path="/events/departmental-reunion" element={<DepartmentalReunionEvents />} />
           <Route path="/leadership/:id" element={<LeadershipDetail />} />
           <Route path="/leadership" element={<TeamSection />} />
          {/* <Route path="/events/career-events" element={<CareerEvents />} /> */}
          {/* <Route path="/events/iftaar-event" element={<IftaarEvents />} /> */}
          {/* <Route path='/alumnigallary' element={<div>{<AlumniGallery/>}</div>} /> */}


          <Route path='*' element={<div><ErrorPage /></div>} />

        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
         <Route path='/alumni/login' element={<AlumniLogin />} />
         <Route path='/alumni/alumnidashboard' element={<AlumniDashboard />} />

        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
        {/* <Route path='alumni/alumnidashboard' element={<PrivateRoute><AlumniDashboard></AlumniDashboard></PrivateRoute>} /> */}
      </Routes> 
      </AlumniAuthProvider>
    </BrowserRouter>
  </AuthProvider>
)
