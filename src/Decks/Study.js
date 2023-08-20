import React, {useState, useEffect} from "react"
import {useParams, Link, Route} from "react-router-dom"

function Study({deck}){
    const deckId = deck.id
    
    
    const [deckCards, setDeckCards] = useState(deck.cards)
    const [deckCard, setDeckCard] = useState(deckCards[0])
    const [toggle, setToggle] = useState(true)
    
   const handleFlipBack=()=>{
    setToggle(!toggle)
   }
   const handleNext=()=>{
    let n = deckCards.indexOf(deckCard)
    if ((n+1) > deckCards.length-1){
      setDeckCard(false)
    }else{
    setDeckCard(deckCards[n+1])}
    setToggle(true)
   }
   const handleStartOver = ()=>{
    setDeckCard(deckCards[0])
   }
   
    if ((deckCards.length > 2) && (deckCard != false) ){
        return (  <div>
                  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={"/"} className="btn btn-link">Go Home</Link>
      </li>
      <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
      <li className="breadcrumb-item active">Study</li>
    </ol>
  </nav>
  {(deckCard==deckCards[0]&&toggle) ? <h1>Study: {deck.name}</h1> : <h1>{deck.name}: Study</h1>}
  
  <div className="card border-secondary">
    <h4>Card {((deck.cards.indexOf(deckCard))+1)} of {deck.cards.length}</h4>
    <p className="card-body">{toggle? deckCard.front : deckCard.back}</p>
    <p><button className="btn-secondary" onClick={handleFlipBack}>Flip</button></p>
    {!toggle? (<p><button className="btn-primary" onClick={handleNext}>Next</button></p>): null}
  </div>
            </div> )
    
    }else if(deckCard === false){
      return(
        <div>
                  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={"/"} className="btn btn-link">Go Home</Link>
      </li>
      <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
      <li className="breadcrumb-item active">Study</li>
    </ol>
  </nav>
  <h1>{deck.name}: Study</h1>
  <div className="card border-secondary">
    <p className="card-body">Would you like to study this deck again?</p>
    <p><button className="btn-secondary" onClick={handleStartOver}>Yes</button></p>
    <Link to={`/`}><button className="btn-primary">No</button></Link>
  </div>
        </div>
      )
    }else {
      return(
        <div><nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"} className="btn btn-link">Go Home</Link>
          </li>
          <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
          <li className="breadcrumb-item active">Study</li>
        </ol>
      </nav>
     <h1>{deck.name}: Study</h1>
        <h3>Not enough cards.</h3>
        <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
        <Link to={`/decks/${deckId}/cards/new`}><button className="btn-primary btn-large">Add Cards</button></Link>
        
        </div>
        
      )
    }
}
export default Study