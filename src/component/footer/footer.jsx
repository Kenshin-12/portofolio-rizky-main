import React from 'react'
import './footer.css'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'

const footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'><b>M. Rizky Ferdiansyah X-RPL-A</b></a>

      <div className='footer__socials'>
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillYoutube/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://mail.google.com"><MdEmail/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; KURASEP Portofolio.All right reserved.</small>

      </div>
    </footer>
  )
}

export default footer