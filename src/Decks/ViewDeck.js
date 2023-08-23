import React, {useState, useEffect} from "react"
import {Link, Route, useRouteMatch, useParams, useHistory, Switch} from "react-router-dom"
import CardList from "./CardList"
import { deleteDeck, readDeck } from "../utils/api"
import DeckEdit from "./DeckEdit"
import CreateCard from "./CreateCard"
import NotFound from "../Layout/NotFound"
import Study from "./Study"
import EditCard from "./EditCard"
 function ViewDeck(){
    const history = useHistory()
    const {deckId} = useParams()
    const {url} = useRouteMatch()
    const [deck, setDeck] = useState([])
    
    const handleDelete = (event)=>{
        
        if(window.confirm("Are you sure you want to delete this deck?")){
        deleteDeck(deck.id)
    }
        history.push('/')
        
    }
    useEffect(()=>{
        readDeck(deckId)
        .then((res) => {
          setDeck(res)    
        })
        .catch(console.err)
    }, [])
   
if (deck.id){
    return( <div><Switch>
        <Route exact path={`${url}`}>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={"/"} className="btn btn-link">Go Home</Link>
      </li>
      <li className="breadcrumb-item active">{deck.name}</li>
    </ol>
  </nav>
        <div className="card w-75 justify-content-center" >
          <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
          <Route>
          <Link to={`${url}/edit`}><button className="btn-secondary">Edit</button></Link>
          <Link to={`${url}/study`}><button className="btn-primary">Study</button></Link>
          <Link to={`${url}/cards/new`}><button className="btn-primary ">Add Cards</button></Link>
          </Route>
          <button className="btn-danger" onClick={handleDelete}>Delete</button>
          </div> 
        </div>
        <h1>Cards</h1>
        {deck.cards.map((card)=> <CardList deck={deck} card={card} key={card.id}/>)}
      </Route>
       <Route  path={`${url}/edit`}><DeckEdit deck={deck}/></Route>
       <Route  path={`${url}/cards/new`}><CreateCard deck={deck} setDeck={setDeck}/></Route>
       <Route path={`${url}/study`}><Study deck={deck}/></Route>
       <Route path={`${url}/cards/:cardId/edit`}><EditCard deck={deck} setDeck={setDeck}/></Route>
       <Route><NotFound/></Route>
       
       </Switch>
        </div>)
}else{
    return(<div>
        <h1>Loading...</h1>
    </div>)
}
}

export default ViewDeck