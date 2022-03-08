import React, { FC, useContext, useState } from "react";
import cocktailCard from "../types/cocktailCard";

interface DefaultContextValue {
  favourites: cocktailCard[];
  addToFavourites: (cocktail: cocktailCard) => void;
  removeFromFavourites: (id: string) => void;
}

const defaultContextValue: DefaultContextValue = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
};

const appContext = React.createContext(defaultContextValue);

const getFavouritesFromStorage = () => {
  const favourites = localStorage.getItem("cocktails");
  console.log(favourites);
};

const AppProvider: FC = ({ children }) => {
  const [favourites, setFavourites] = useState<cocktailCard[]>([]);

  const addToFavourites = (cocktail: cocktailCard) => {
    setFavourites([...favourites, cocktail]);
    console.log("add");
  };

  const removeFromFavourites = (id: string) => {
    const newFavourites = favourites.filter((cocktail) => cocktail.id !== id);
    setFavourites(newFavourites);
    console.log("remove");
  };

  return (
    <appContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(appContext);
};

export { AppProvider, useAppContext };
