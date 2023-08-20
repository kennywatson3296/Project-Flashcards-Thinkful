import React, {useState} from "react"
import {Link, useParams, useHistory} from "react-router-dom"
import { createCard, readDeck} from "../utils/api"
function CreateCard({deck}){
    const history = useHistory()
    const deckId = deck.id
   
    const initialFormState = {
        "front": "",
        "back": "",
       
    }
    
    const [formData, setFormData] = useState({...initialFormState})
const handleChange = ({target})=>{
    const value = target.value
    setFormData({
        ...formData,
        [target.name]: value,
    })
}
const handleClick = (event) =>{
    history.push('/')
}
const handleSubmit = ()=>{
     createCard(deckId, formData)
     .then(console.log)
     .then(readDeck(deckId))
     .then(setFormData({...initialFormState}))
     
   
}
if(deck.id){
    return (
        <div>
        <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={"/"} className="btn btn-link">Go Home</Link>
      </li>
      <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
      <li className="breadcrumb-item active">Add Card</li>
    </ol>
  </nav>
  <label htmlFor="front">Front</label>
        <textarea name="front" onChange={handleChange} value={formData.front} placeholder="Front side of card"/>
<label htmlFor="back">Back</label>
        <textarea name="back" onChange={handleChange} value={formData.back} placeholder="Back side of card"/>
        <button type="button" className="btn-secondary" onClick={handleClick}>Done</button>
        <button type="submit" className="btn-primary" onClick={handleSubmit}>Save</button>

        </div>
    )}
    else{
        return( <h1>Loading...</h1>)
    }
}

export default CreateCard