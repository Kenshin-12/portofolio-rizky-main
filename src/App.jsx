import React, { useState } from 'react'
import Header from './component/header/header'
import Nav from './component/nav/Navbar'
import About from './component/about/about'
import Experience from './component/experience/experience'
import AppBar from './component/nav/appMobile'
import Portofolio from './component/portofolio/portofolio'
import Article from './component/article/article'
import Contact from './component/contact/contact'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from './component/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material'

const App = () => {
  const [apa, setApa] = useState('Assalammualaikum')
  const [salam, setSalam] = useState('')
  const [job, setJob] = useState('')

  const datas = {
    apa, setApa, job, setJob, salam, setSalam
  }

  // function MyComponent() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
      <>
        <Router>
          < >
          {/* <CssBaseline /> */}
            {matches ? <Nav /> : <AppBar />}
            <Routes>
              <Route exact path='/' element={<Header datas={datas} />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/experience' element={<Experience />} />
              <Route exact path='/portofolio' element={<Portofolio />} />
              <Route exact path='/article' element={<Article />} />
              <Route exact path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </>
        </Router>
      </>
    )
  }

  export default App