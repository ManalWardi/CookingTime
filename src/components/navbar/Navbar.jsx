import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import Logo from '../../images/cookTime.png'

function Navbar() {
  return (
    <div className={classes.container}>
         <div className={classes.wrapper}>
            <Link to='/' className={classes.left}>
               <img src={Logo} alt="Logo" className={classes.logo} />
               <span className={classes.titleLogo}>CookingTime</span>
            </Link>
            <ul className={classes.center}>
               <li >
               <Link to="/" className={classes.listItem}>
                  Home
                </Link>
               </li>
               <li >
               <Link to="/favourite" className={classes.listItem}>
                  Favourite Recipes
                  </Link>
               </li>
               <li >
               <Link to="/explore" className={classes.listItem}>
                  Explore
                </Link>
               </li>
              
            </ul>
            
           
         </div>
      </div>
  )
}

export default Navbar