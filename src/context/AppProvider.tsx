import React, { FC, useContext, useState } from "react";
import cocktailCard from "../types/cocktail";

// create context
interface defaultContextValueInt {
  favouriteCocktails: Array<cocktailCard>;
  addCocktailToFavourites: (cocktail: cocktailCard) => void;
  removeCocktailFromFavourites: (id: string) => void;
}

const defaultContextValue: defaultContextValueInt = {
  favouriteCocktails: [],
  addCocktailToFavourites: () => {},
  removeCocktailFromFavourites: () => {},
};

const AppContext = React.createContext(defaultContextValue);

const AppProvider: FC = ({ children }) => {
  const [state, setState] = useState(defaultContextValue);

  const addCocktailToFavourites = (cocktail: cocktailCard) => {
    const newFavouriteCocktails = [...state.favouriteCocktails, cocktail];
    setState({ ...state, favouriteCocktails: newFavouriteCocktails });
  };

  const removeCocktailFromFavourites = (id: string) => {
    const newFavouriteCocktails = state.favouriteCocktails.filter(
      (cocktail) => cocktail.id !== id
    );
    setState({ ...state, favouriteCocktails: newFavouriteCocktails });
  };

  return (
    <AppContext.Provider
      value={{
        favouriteCocktails: state.favouriteCocktails,
        addCocktailToFavourites,
        removeCocktailFromFavourites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
