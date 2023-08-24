import React, {useState} from "react"
import {Link, useParams, useHistory} from "react-router-dom"
import { createCard, readDeck} from "../utils/api"
import CardForm from "./CardForm"
function CreateCard({deck, setDeck}){
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
    history.push(`/decks/${deckId}`)
}
const handleSubmit = ()=>{
     createCard(deckId, formData)
     .then((res)=>{console.log(res)
    const cardIndex = deck.cards.length
     deck.cards[cardIndex] = res
    setDeck(deck)})
     setFormData({...initialFormState})
   
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
 <CardForm handleChange={handleChange} data={formData} />
        <button type="button" className="btn-secondary" onClick={handleClick}>Done</button>
        <button type="submit" className="btn-primary" onClick={handleSubmit}>Save</button>

        </div>
    )}
    else{
        return( <h1>Loading...</h1>)
    }
}

export default CreateCard