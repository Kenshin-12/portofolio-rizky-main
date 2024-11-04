import React from 'react'
import './about.css'
import ME from '../../assets/insta.jpg'
import {AiOutlineProject} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {FaSchool} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
       <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About image" />
        </div>
       </div>

      <div className="about__content">
        <div className="about__cards">
          <a href="https://smkn1kotabekasi.sch.id/">
            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5>Education</h5>
              <small>SMKN 1 KOTA BEKASI (2021-NOW)</small>
            </article>
          </a>
          
          <Link to='/portofolio'>
            <article className='about__card'>
                <AiOutlineProject className='about__icon'/>
                <h5>Project</h5>
                <small>2 Project</small>
              </article>
          </Link>
        </div>

        <p>
          Nama saya Muhammad Rizky Ferdiansyah seorang siswa dari Program Studi Rekayasa Perangkat Lunak (RPL). 
          Saya mempunyai ketertarikan dalam dunia internet terutama di bidang pemrogaman.
          Saya sangat suka mempelajari ilmu pemrogaman dan ingin membuat program yang menarik dan bermanfaat bagi semua orang.
        </p>

        <Link to="/contact" className='btn btn-primary'>Let's Talk</Link>
      </div>
      </div>
    </section>
  )
}

export default about