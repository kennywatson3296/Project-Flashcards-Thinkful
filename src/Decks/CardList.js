import React from "react"
import {Link, Route, useRouteMatch, useParams} from "react-router-dom"

import {deleteCard} from "../utils/api/index"
function CardList({card}){
const {url} = useRouteMatch()
const {cardId} = useParams()
const handleDelete = (event)=>{
    if(window.confirm("Are you sure you want to delete this card?")){
deleteCard(card.id)
.then((res)=>{console.log(res)})
.then(window.location.reload())}

}
    return (
        <div className="card text-right w-75 justify-content-center border-secondary">
            <div className="row">
                <p className="card-body col-6">{card.front}</p>
                <p className="card-body col-6">{card.back}</p>
            </div>
          <div>
            <Route>
                <Link to={`${url}/cards/${card.id}/edit`}><button className="btn-primary">Edit</button></Link>
                </Route>
                <button className="btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default CardList