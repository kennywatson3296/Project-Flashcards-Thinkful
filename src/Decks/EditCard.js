import React, {useState, useEffect} from "react"
import {Link, useParams, useHistory} from "react-router-dom"
import { readCard, readDeck, updateCard} from "../utils/api"
function EditCard({deck, setDeck}){
    const history = useHistory()
    const deckId = deck.id
    const {cardId} = useParams()
    const [card, setCard] = useState([])

    useEffect(()=>{
        readCard(cardId)
        .then(setCard)
        .catch(console.err)
    },[])
const handleChange = ({target})=>{
    const value = target.value
    setCard({
        ...card,
        [target.name]: value,
    })
}

const handleClick = (event) =>{
    readDeck(deckId)
    .then(history.push(`/decks/${deckId}`))
}
const handleSubmit = ()=>{
     updateCard(card)
     .then(readCard(cardId))
     .then((res)=>{
        setCard(res)
            readDeck(deckId)
            .then((res)=>{setDeck(res)})
    .then(history.push(`/decks/${deckId}`))
        // const cardIndex = deck.cards.findIndex(
        //     (card)=>card.id == cardId
        // )
        // console.log(cardIndex, cardId)
        // deck.cards[cardIndex] = res;
        // setDeck(deck)
        // console.log(deck, res)
    })
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
      <li className="breadcrumb-item active">Edit Card </li>
    </ol>
  </nav>
  <label htmlFor="front">Front</label>
        <textarea name="front" onChange={handleChange} value={card.front}/>
<label htmlFor="back">Back</label>
        <textarea name="back" onChange={handleChange} value={card.back}/>
        <button type="button" className="btn-secondary" onClick={handleClick}>Cancel</button>
        <button type="submit" className="btn-primary" onClick={handleSubmit}>Submit</button>

        </div>
    )}
    else{
        return( <h1>Loading...</h1>)
    }
}

export default EditCard