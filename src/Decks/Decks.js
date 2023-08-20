import React from "react"
import {Link, Route, Switch, useRouteMatch, useParams} from "react-router-dom"
import DeckList from "./DeckList"
import CreateDeck from "./CreateDeck"
import ViewDeck from "./ViewDeck"
import NotFound from "../Layout/NotFound"






function Decks(){
return (
    <Switch>
        <Route exact path="/"><DeckList /></Route>
        <Route exact path="/decks/new"><CreateDeck /></Route>
        <Route path="/decks/:deckId"><ViewDeck/></Route>
        
        <Route><NotFound/></Route>
    </Switch>
)
}

export default Decks