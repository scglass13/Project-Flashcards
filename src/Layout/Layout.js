import React from "react";
import { Switch, Router, Route } from "react-router";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckCreate from "./DeckCreate";
import Home from "./screens/Home";
import Study from "./screens/Study";
import ExistingDeck from "./screens/ListDecks";



// Each card represents a flashcard with a front , where the question is displayed, and a back, where the answer can be found. A card also contains the deckId, which matches the card to the deck that the card belongs to.


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId">
            <ExistingDeck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default Layout;
