import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import classes from './categories.module.css'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { GlobalContext } from "../../context/GlobalState";
import RecipeCard from '../explore/RecipeCard'


const Categories = () => {
    const {
        addRecipeToFavouritelist,
        
      } = useContext(GlobalContext);

    
  const URL_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("")
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(URL_CATEGORIES)
                const data = await res.json()
                setCategories(data.categories)
                setActiveCategory(data.categories[0].strCategory)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(`${URL_RECIPES}${activeCategory}`)
                const data = await res.json()
                setRecipes(data.meals.slice(0, 12))
            } catch (error) {
                console.error(error)
            }
        }
        activeCategory && fetchRecipes()
    }, [activeCategory])

  return (
     <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                  <hr  className={classes.separator}/>
                    <h2>Pick a category</h2>
                    <h5>Choose what suits you</h5>
                </div>
                <div className={classes.categories}>
                    {categories?.map((category) => (
                        <div
                            onClick={() => setActiveCategory(category.strCategory)}
                            className={`${classes.category} ${activeCategory === category.strCategory && classes.active}`}
                            key={category.idCategory}>

                            {category.strCategory}
                        </div>
                    ))}
                </div>
                <div className={classes.recipes}>
                    {recipes?.map((recipe) => (
                        <RecipeCard
                        key={recipe.idMeal}
                        recipe={recipe}
                     />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Categories