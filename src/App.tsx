import React from "react";
// sass
import "./assets/scss/index.scss";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// pages
import {
  Home,
  Cocktails,
  FavouriteCocktails,
  SingleCocktail,
  Error,
} from "./pages";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cocktails" element={<Cocktails />}></Route>
          <Route
            path="/cocktails/:cocktailId"
            element={<SingleCocktail />}
          ></Route>
          <Route path="/favourites" element={<FavouriteCocktails />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
