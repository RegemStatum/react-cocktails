import React, { FC } from "react";
import CocktailCard from "../components/CocktailCard";
import { HeroInfo, Pros, Slider, SubscribeForm } from "../components/index";

const Home: FC = () => {
  return (
    <div className="home-page">
      <HeroInfo />
      <Pros />
      <CocktailCard />
      <Slider />
      <SubscribeForm />
    </div>
  );
};

export default Home;
