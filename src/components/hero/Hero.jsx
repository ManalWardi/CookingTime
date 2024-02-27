import React from 'react'
import classes from './hero.module.css'
import meal from '../../images/banner2.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  const URL1 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Treacle'
  const URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=big'
  const [Recipe1, setRecipe1] = useState('')
  const [Recipe2, setRecipe2] = useState('')

  useEffect(() => {
    const fetchRecipe1 = async () => {
      try {
        const res = await fetch(URL1)
        const data = await res.json()

        setRecipe1(data.meals[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipe1()
  }, [])

  useEffect(() => {
    const fetchRecipe2 = async () => {
      try {
        const res = await fetch(URL2)
        const data = await res.json()
        console.log(data.meals[0].strMeal)
        setRecipe2(data.meals[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipe2()
  }, [])

  return (
        <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>Global recipes, endless flavors, <br />explore the world on your plate</h2>
          <h5>Savor the Art of Home Cooking</h5>
          <p className={classes.firstDesc}>You've just stepped into the ultimate destination for <br /> mouthwatering recipes and culinary inspiration</p>
          <p className={classes.secondDesc}>Discover the culinary treasures we've prepared just for you.</p>
          <div className={classes.buttons}>
            <button>
              <Link to="/explore" className={classes.link1}>
              Search for a recipe
              </Link>
              </button>
            <button>
            <Link to="/favourite" className={classes.link2}>
            Your favourite recipes
              </Link>
              </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={meal} />
          <div className={classes.Meal1}>
            <div className={classes.imgContainer}>
              <img src={Recipe1?.strMealThumb} />
            </div>
            {/* <h5>{Recipe1?.strMeal}</h5> */}
          </div>
          <div className={classes.Meal2}>
            <div className={classes.imgContainer}>
              <img src={Recipe2?.strMealThumb} />
            </div>
            {/* <h5>{Recipe2?.strMeal}</h5> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero