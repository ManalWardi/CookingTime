import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favouritelist: localStorage.getItem("favouritelist")
    ? JSON.parse(localStorage.getItem("favouritelist"))
    : [],
  
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favouritelist", JSON.stringify(state.favouritelist));
    
  }, [state]);

  

  // actions
  const addRecipeToFavouritelist = (recipe) => {
    dispatch({ type: "ADD_RECIPE_TO_FAVOURITELIST", payload: recipe });
  };

  const removeRecipeFromFavouritelist = (id) => {
    dispatch({ type: "REMOVE_RECIPE_FROM_FAVOURITELIST", payload: id });
  };

  

  return (
    <GlobalContext.Provider
      value={{
        favouritelist: state.favouritelist,
        addRecipeToFavouritelist,
        removeRecipeFromFavouritelist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
