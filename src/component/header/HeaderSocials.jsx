import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://mail.google.com" target="_blank"><SiGmail/></a>
        <a href="https://web.facebook.com/" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials