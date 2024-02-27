import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from "../../context/GlobalState";
import { IoHeartDislikeOutline } from "react-icons/io5";
import classes from './favourite.module.css'


export const MyRecipeCard = ({ recipe }) => {
    const {
        removeRecipeFromFavouritelist,
        favouritelist,
      } = useContext(GlobalContext);
      const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
  return (
    <div className={classes.card}>
          <Link to={`/recipe/${idMeal}`} className={classes.link}>
            <img
                src={strMealThumb}
                alt={strMeal}
                className={classes.cardImage}
            />
            </Link>
            <div  className={classes.cardBody}>
            <button ><IoHeartDislikeOutline  className={classes.heartIcon} onClick={() => removeRecipeFromFavouritelist(idMeal)}/></button>
                <h3>{strMeal}</h3>
            </div>
            
        </div>
  )
}
