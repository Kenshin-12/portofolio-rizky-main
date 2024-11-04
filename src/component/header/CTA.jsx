import React from 'react'
import CV from '../../assets/CV-rizky.pdf'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <Link to="/article" className='btn btn-primary'>Article</Link>
    </div>
  )
}

export default CTA