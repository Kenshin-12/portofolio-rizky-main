import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/form-login.png'
import IMG2 from '../../assets/news-web.png'
import {AiOutlineFile} from 'react-icons/ai'
import List from '@mui/material/List';
import {IoLogoJavascript} from 'react-icons/io5'
import {AiFillHtml5} from 'react-icons/ai'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { BiFontFamily } from 'react-icons/bi'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Game News Web',
    github: 'https://github.com',
    logo: <AiFillHtml5 className='logo' /> ,
    logo2: <IoLogoJavascript className='logo' />,
    bhs1: 'HTML',
    bhs2: 'JavaScript'
  },

  {
    id: 2,
    image: IMG1,
    title: 'Tugas Membuat form login',
    github: 'https://github.com',
    logo: <AiFillHtml5 className='logo' />,
    bhs1: 'HTML'
  },
]

const Portofolio = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Project <AiOutlineFile /></h2>

      <div className='container portofolio__container'>
       {
        data.map(({id, image, title, github, bhs1, bhs2, logo, logo2}) => {
          return (
            <article key={id} className='portofolio__item'>
            <div className='portofolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portofolio__item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <List className='portofolio__items'>
              <ListItemButton onClick={handleClick}>
              <ListItemText primary="Language used:" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {logo}
                    </ListItemIcon>
                    <ListItemText primary={bhs1} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {logo2}
                    </ListItemIcon>
                    <ListItemText primary={bhs2} />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}
export default Portofolio