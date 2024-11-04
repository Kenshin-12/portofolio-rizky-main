import React from 'react'
import './article.css'
import IMG1 from '../../assets/web_desa2.png'
import IMG2 from '../../assets/news-web.png'
import {AiOutlineFile} from 'react-icons/ai'
import List from '@mui/material/List';
import {IoLogoJavascript} from 'react-icons/io5'
import ArticleIcon from '@mui/icons-material/Article';
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
    image: IMG1,
    title: 'Game News Web',
    github: 'https://desa-digital.wegic.app/',
    logo: <ArticleIcon className='logo' /> ,
    logo2: <IoLogoJavascript className='logo' />,
    bhs1: 'HTML',
    bhs2: 'JavaScript'
  },

]

const Article = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section id='portofolio'>
      <h5>My Recent</h5>
      <h2>Article <ArticleIcon /></h2>

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
              <a href={github} className='btn' target='_blank'>My Article</a>
            </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}
export default Article