import { useState } from 'react'

import viteLogo from '/vite.svg'
import NavBar from './Components/NavBar/NavBar'
import { FaFacebookF, FaHouseUser, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaCircleInfo } from 'react-icons/fa6'
import { MdHomeRepairService } from 'react-icons/md'
import { RiContactsBook3Fill } from 'react-icons/ri'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Section from './Components/Section/Section'
import SectionTitle from './Components/sectionTitle/sectionTitle'
import PopularDestination from './Components/PopularDestination/PopularDestination'
import Card from './Components/Card/Card'
import Container from './Components/Container/Container'
import ListFooter from './Components/ListFooter/ListFooter'
import { BsBehance } from 'react-icons/bs'
import TitleFooter from './Components/TitleFooter/TitleFooter'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login/Login'
import Auth from './pages/Auth/auth'
import SignUp from './pages/SignUp/SignUp'
import Root from './pages/Root/Root'
import Service from './pages/Service/Service'


function App() {
  const [count, setCount] = useState(0)




  return (
    <>
    
  
    <Routes>
      <Route path='/' element={<Root/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}>
          <Route path=":id" element={<Service/>}/>
        </Route>
         <Route path="/contact" element={<Contact/>}/>
     </Route>
    
     
     <Route path="/auth" element={<Auth/>} > 
       <Route path="/auth/login" element={<Login/>}/>
       <Route path="/auth/signup" element={<SignUp/>}/>
     </Route>
     
    </Routes>
    

     </>
  )
}

export default App
