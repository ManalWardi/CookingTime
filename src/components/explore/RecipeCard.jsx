import React, { useContext } from 'react';
import classes from './explore.module.css';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GlobalContext } from '../../context/GlobalState';


const RecipeCard = ({ recipe }) => {
  const { addRecipeToFavouritelist, removeRecipeFromFavouritelist, favouritelist } = useContext(GlobalContext);

  const isFavourite = favouritelist.some((o) => o.idMeal === recipe.idMeal);

  const handleHeartClick = () => {
    if (isFavourite) {
      removeRecipeFromFavouritelist(recipe.idMeal);
    } else {
      addRecipeToFavouritelist(recipe);
    }
  };

  return (
    <div className={classes.card}>
      <Link to={`/recipe/${recipe.idMeal}`} className={classes.link}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className={classes.cardImage} />
      </Link>
      <div className={classes.cardBody}>
        <button onClick={handleHeartClick}>
          <IoMdHeartEmpty className={`${classes.heartIcon} ${isFavourite ? classes.redHeart : ''}`} />
        </button>
        <span className={classes.category}>{recipe.strCategory}</span>
        <h3>{recipe.strMeal}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
