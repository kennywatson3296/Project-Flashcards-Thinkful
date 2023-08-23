import React, {useState, useEffect} from "react"
import { listDecks } from "../utils/api"
import {Link} from "react-router-dom"
import DeckView from "./DeckView"
function DeckList(){
const [decks, setDecks] = useState([])
    useEffect(()=>{
        listDecks()
        .then(setDecks)
        .catch(console.err)
    }, [])
    if(decks.length > 0){
    return(
        <div>
            <Link to="decks/new">
                <button type="button" className="btn btn-primary">Create Deck</button>
            </Link>
            {decks.map((deck)=> <DeckView deck={deck} setDecks={setDecks} key={deck.id}/>)}
        </div>
    )
}else if (decks.length == 0) {
    return( <div>
        <h1>No decks in list...</h1>
        <Link to="decks/new">
                <button type="button" className="btn btn-primary">Create Deck</button>
            </Link>
    </div>)
}}
export default DeckList