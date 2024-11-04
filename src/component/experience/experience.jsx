import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
import {IoIosSchool} from 'react-icons/io'
import {RiComputerFill} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience'>
        <h2>My Experience And Education</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <AiFillHtml5 className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experience</small>
                </div>
              </article>

              <article className='experience__details'>
                <DiCss3 className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experience</small>
                </div>
              </article>

              <article className='experience__details'>
                <DiJavascript1 className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experience</small>
                </div>
              </article>

              <article className='experience__details'>
                <FaReact className='experience__details-icon' />
                <div>
                  <h4>React Js</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__edu">
            <h3>Education</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <FaSchool className='experience__details-icon' />
                <div>
                  <h4>SDN Jatimkamur V</h4>
                  <small className='text-light'>2012 - 2018</small>
                </div>
              </article>

              <article className='experience__details'>
                <IoIosSchool className='experience__details-icon' />
                <div>
                  <h4>SMPN 20 Jakarta</h4>
                  <small className='text-light'>2018 - 2021</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiComputerFill className='experience__details-icon'/>
                <div>
                  <h4>SMKN 1 Kota Bekasi</h4>
                  <small className='text-light'>2021 - Now</small>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience