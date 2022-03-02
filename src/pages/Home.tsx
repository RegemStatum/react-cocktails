import React, { FC } from "react";
import CocktailCard from "../components/CocktailCard";
import {
  HeroInfo,
  MoreCocktailsBtn,
  Pros,
  Slider,
  SubscribeForm,
} from "../components/index";
import cocktailImg from "../assets/images/DefaultCocktail.jpg";

const cocktailObj = {
  name: "Whiskey Cola",
  isAlcoholic: false,
  ingredientsArr: [
    "2 ounces whiskey",
    "Coca-Cola, chilled, to top (4 to 6 ounces, to taste)",
    "Garnish: lemon twist (optional)",
  ],
  image: cocktailImg,
};

const Home: FC = () => {
  return (
    <div className="home-page container">
      <HeroInfo />
      <Pros />
      <CocktailCard {...cocktailObj} cardClassName="home-page__cocktail-card" />
      <MoreCocktailsBtn />
      <Slider />
      <SubscribeForm />
    </div>
  );
};

export default Home;
