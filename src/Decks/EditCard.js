import React, {useState, useEffect} from "react"
import {Link, useParams, useHistory} from "react-router-dom"
import { readCard, readDeck, updateCard} from "../utils/api"
function EditCard({deck}){
    const history = useHistory()
    const deckId = deck.id
    const {cardId} = useParams()
    const [card, setCard] = useState([])
    const [formData, setFormData] = useState({...card})
    useEffect(()=>{
        readCard(cardId)
        .then(setCard)
        .then(setFormData({...card}))
        
        .catch(console.err)
    },[])
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
     updateCard(formData)
     
     .then(readCard(cardId))
     .then(setCard)
     .then(setFormData({...card}))
     .then(window.location.reload())
     
   
}
if(card.id == cardId){
    return (
        <div>
        <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={"/"} className="btn btn-link">Go Home</Link>
      </li>
      <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
      <li className="breadcrumb-item active">Edit Card</li>
    </ol>
  </nav>
  <label htmlFor="front">Front</label>
        <textarea name="front" onChange={handleChange} value={card.front}/>
<label htmlFor="back">Back</label>
        <textarea name="back" onChange={handleChange} value={card.back}/>
        <button type="button" className="btn-secondary" onClick={handleClick}>Done</button>
        <button type="submit" className="btn-primary" onClick={handleSubmit}>Save</button>

        </div>
    )}
    else{
        return( <h1>Loading...</h1>)
    }
}

export default EditCard