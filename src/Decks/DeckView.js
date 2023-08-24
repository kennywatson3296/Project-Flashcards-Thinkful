import React, {useEffect, useState} from "react"
import { deleteDeck } from "../utils/api"
import {Link} from "react-router-dom"
function DeckView({deck}){

    const handleDelete = (event)=>{
        
        if(window.confirm("Are you sure you want to delete this deck?")){
        deleteDeck(deck.id)
        .then(window.location.reload())}
        
    }
    return (
        <div className="jumbotron" key={deck.id}>
            <p className="lead">{deck.cards.length} cards</p>
            <h1 className="display-4">{deck.name}</h1>
            <p className="lead">{deck.description}</p>
            <hr/>
           <Link to={`/decks/${deck.id}`}> <p className="btn btn-secondary">View</p></Link>
            <Link to={`/decks/${deck.id}/study`}><p className="btn btn-primary" >Study</p></Link>
            <p className="btn btn-danger .offset-ml-8" onClick={handleDelete} >Delete</p>
            
        </div>
    )
}
export default DeckView