import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillFile} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Avatar from "@mui/material/Avatar";
import ArticleIcon from '@mui/icons-material/Article';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav=()=> {
    document.getElementById("myNav").style.height = '100%';
  }
  closeNav=()=> {
    document.getElementById("myNav").style.height = '0%';
  }

  render() {
  return (
    <>
      <div id="myNav" className="overlay">
        <a className='avatar' href='https://www.instagram.com/_kyr1z_/'>
        <Avatar
        alt="Remy Sharp"
        src="https://i.pinimg.com/originals/18/7f/17/187f170aa5a0eabfbadabb687024725d.jpg"
        sx={{ top: 20, width: 56, height: 56 }}
        />
        </a>
        <a href="#!" className="closebtn" onClick={this.closeNav}>&times;</a>
        <div className="overlay-content">
            <li><Link to="/"><AiFillHome className='n-icon'/> Home</Link></li>
            <li><Link to="/about"><FaUserAlt className='n-icon'/> About</Link></li>
            <li><Link to="/experience"><BiBook className='n-icon'/> Experiences</Link></li>
            <li><Link to="/portofolio"><AiFillFile className='n-icon'/> Project</Link></li>
            <li><Link to="/article"><ArticleIcon className='n-icon'/> Article</Link></li>
            <li><Link to="/contact"><BsFillTelephoneFill className='n-icon'/> Contact</Link></li>
        </div>
      </div>
      <div className="button" style={{fontSize: '30px', cursor: 'pointer'}} onClick={this.openNav}>☰</div>
    </>
      
  );
  }
}
