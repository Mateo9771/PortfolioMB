import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import LogoWhatt from './Components/LogoWhatt/LogoWhatt'
import Footer from './Components/Footer/Footer'
import AboutMe from './Components/AboutMe/AboutMe'
import CertificatesList from './Components/CertificatesList/CertificatesList'
import SkillsList from './Components/SkillsList/SkillsList'
import FrontPage from './Components/FrontPage/FrontPage'
import FormContact from './Components/FormContact/FortmContact'
import ProjectList from './Components/ProjectList/ProjectList'

function App() {
 

  return (
    <div className='App'>
      <NavBar/>
      <FrontPage/>
      <AboutMe/>
      <CertificatesList/>
      <ProjectList/>
      <SkillsList/>
      <FormContact/>
      <LogoWhatt/>
      <Footer/>
    </div>
  )
}

export default App
