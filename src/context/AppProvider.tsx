import React, { FC, useContext, useState } from "react";
import cocktailCard from "../types/cocktailCard";

interface DefaultContextValue {
  favourites: cocktailCard[];
  addToFavourites: (cocktail: cocktailCard) => void;
  removeFromFavourites: (id: string) => void;
  checkIsCocktailLiked: (id: string) => boolean;
}

const defaultContextValue: DefaultContextValue = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  checkIsCocktailLiked: () => false,
};

interface StorageObj {
  favourites: Array<cocktailCard>;
}

const appContext = React.createContext(defaultContextValue);

const getFavouritesFromStorage = () => {
  const cocktailsStorageObj = localStorage.getItem("cocktails");
  let favourites = [];

  if (cocktailsStorageObj) {
    favourites = JSON.parse(cocktailsStorageObj).favourites;
  }
  return favourites;
};

const AppProvider: FC = ({ children }) => {
  const [favourites, setFavourites] = useState<cocktailCard[]>(
    getFavouritesFromStorage()
  );
  const [storageObj, setStorageObj] = useState<StorageObj>({
    favourites: getFavouritesFromStorage(),
  });

  const handleFavouritesChange = (newFavourites: cocktailCard[]) => {
    const newStorageObj = { ...storageObj, favourites: newFavourites };
    setFavourites(newFavourites);
    setStorageObj(newStorageObj);
    localStorage.setItem("cocktails", JSON.stringify(newStorageObj));
  };

  const addToFavourites = (cocktail: cocktailCard) => {
    const newFavourites = [...favourites, cocktail];
    handleFavouritesChange(newFavourites);
  };

  const removeFromFavourites = (id: string) => {
    const newFavourites = favourites.filter((cocktail) => cocktail.id !== id);
    handleFavouritesChange(newFavourites);
  };

  const checkIsCocktailLiked = (id: string) => {
    return favourites.findIndex((cocktail) => cocktail.id === id) === -1
      ? false
      : true;
  };

  return (
    <appContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        checkIsCocktailLiked,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(appContext);
};

export { AppProvider, useAppContext };
