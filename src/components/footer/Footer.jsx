import React from 'react'
import classes from './footer.module.css'

function Footer() {
  return (
    <footer  className={classes.footer}>
    <div className={classes.footerContent}>
      
      
      <div className={classes.footerSection}>
        <h3>CookingTime</h3>
        <p>Made by Manal Wardi  &copy;2023</p>
        
      </div>
    </div>
  </footer>
  )
}

export default Footer