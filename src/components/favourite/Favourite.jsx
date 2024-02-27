import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import classes from './favourite.module.css'
import { MyRecipeCard } from './MyRecipeCard'

function Favourite() {
  const {favouritelist}=useContext(GlobalContext);
  return (
    <div className={classes.container}>
      <h2>Your Favourite Recipes</h2>
      {favouritelist.length > 0 ? (
        <div className={classes.recipes}>
        {favouritelist.map((recipe) => (
                <MyRecipeCard recipe={recipe} />
              ))}
        </div>

      ) : (
        <h3 className={classes.noRecipe}>No recipes in your list, add some!</h3>
      )}
      
    </div>
  )
}

export default Favourite