import React from 'react'
import classes from './recipeDetails.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { TiPin } from "react-icons/ti";


function RecipeDetails() {

  const [recipe, setRecipe] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])
  const URL_DETAILS = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  const { id } = useParams()

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`${URL_DETAILS}${id}`)
        const data = await res.json()
        setRecipe(data.meals[0])
        Object.keys(data.meals[0]).forEach((key) => {
          if (key.includes('strIngredient') && data.meals[0][key] !== "") {
            setIngredients(prev => {
              if (prev.length === 0) return [data.meals[0][key]]
              else return [...prev, data.meals[0][key]]
            })
          }

          if (key.includes('strMeasure') && data.meals[0][key] !== "") {
            setMeasures(prev => {
              if (prev.length === 0) return [data.meals[0][key]]
              else return [...prev, data.meals[0][key]]
            })
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipeDetails()
  }, [id])

  return (
    <div className={classes.container}>
      <h2 className={classes.titleSection}>Recipe Details</h2>
      
      <div className={classes.wrapper}>   
        <div className={classes.left}>
          <img src={recipe?.strMealThumb} />
        </div>
        <div className={classes.right}>
          <div className={classes.title}>
            <h3>{recipe?.strMeal}</h3>
            <h4>{recipe?.strArea}</h4>
          </div>
          <div className={classes.instruction}>
            <p>{recipe?.strInstructions}</p>
          </div>
        </div>
      </div>
      <div className={classes.ingredients}>
        <h4>Ingredients</h4>
        <div className={classes.ingredient}>
        {ingredients?.map((ingredient, i) => (
              <div key={ingredient} className={classes.ingredientElem}>
                <TiPin className={classes.pinIcon}/>&nbsp;
                <span>{ingredient}  </span>
                &nbsp;&nbsp;-&nbsp;&nbsp;    
                <span>   {measures[i]}</span>&nbsp;&nbsp;
              </div>
         ))}
        </div>
        
      </div>
      <div className={classes.video}>
        <a href={recipe?.strYoutube} target='_blank'>Watch it on Youtube</a>
      </div>
      
    </div>
  )
}

export default RecipeDetails