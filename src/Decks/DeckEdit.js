import React, {useState, useEffect} from "react"
import { updateDeck, listDecks, readDeck } from "../utils/api"
import DeckList from "./DeckList"
import {Link, useParams, useHistory} from "react-router-dom"

function DeckEdit({deck}){
  const {deckId} = useParams()
    const history = useHistory()
const [formData, setFormData] = useState({...deck})
const handleChange=({target})=>{
setFormData({
    ...formData,
    [target.name]:target.value
})
}
const handleClick = (event) =>{
    history.push(`/decks/${deckId}`)
}
const handleSubmit = ()=>{
     updateDeck(formData)
     
     .then(listDecks())
    history.push('/')
}
if (deck.id){
return (
    <div>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={"/"} className="btn btn-link">Go Home</Link>
      </li>
      <li className="breadcrumb-item active">Edit Deck</li>
    </ol>
  </nav>
  
  <h1>EditDeck</h1>
  <div className="col-6">
  <label htmlFor="name">Name</label>
  <input name="name" type="text" onChange={handleChange} placeholder="Deck Name" required={true} value={formData.name}></input>
  </div><div className="col-6">
  <label htmlFor="description">Description</label>
  <textarea name="description" type="text" onChange={handleChange} placeholder="Brief description of the deck" required={true} value={formData.description}></textarea>
  <button onClick={handleClick}>Cancel</button>
  <button type="submit" onClick={handleSubmit} >Edit Deck</button>
  </div>
  
  </div>
)}else{
    return (<h1>Loading...</h1>)
}
} 

export default DeckEdit