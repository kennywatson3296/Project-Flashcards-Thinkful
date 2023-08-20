import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Route, Switch} from  "react-router-dom"
import Decks from "../Decks/Decks"
function Layout() {
  return (
    <>
    <Route>
      <Header />
      <div className="container">
        <Switch>
<Route path="/"><Decks /></Route>
       <Route><NotFound /></Route>
        </Switch>
      </div>
      </Route>
    </>
  );
}

export default Layout;
