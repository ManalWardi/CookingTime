import React from 'react'
import classes from './home.module.css'
import Categories from '../categories/Categories'

import Hero from '../hero/Hero'

function Home() {
  return (
    <div className={classes.container}>
       <Hero />
       <Categories />
    </div>
  )
}

export default Home