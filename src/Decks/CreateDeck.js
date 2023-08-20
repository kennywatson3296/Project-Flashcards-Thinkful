import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import { createDeck, listDecks } from "../utils/api"

function CreateDeck({decks}){
    const history = useHistory()
const initialFormState = {
    name: "",
    description: "",
    cards:{},
}
const [formData, setFormData] = useState({...initialFormState})

const handleChange=({target})=>{
setFormData({
    ...formData,
    [target.name]:target.value
})
}
const handleClick = (event) =>{
    history.push('/')
}
const handleSubmit = ()=>{
     createDeck(formData)
     .then(setFormData({...initialFormState}))
     .then(listDecks())
    history.push('/')
}
return (
    <div>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={"/"} className="btn btn-link">Go Home</Link>
      </li>
      <li className="breadcrumb-item active">Create Deck</li>
    </ol>
  </nav>
  
  <h1>Create Deck</h1>
  <div className="col-6">
  <label htmlFor="name">Name</label>
  <input name="name" type="text" onChange={handleChange} placeholder="Deck Name" required={true} value={formData.name}></input>
  </div><div className="col-6">
  <label htmlFor="description">Description</label>
  <textarea name="description" type="text" onChange={handleChange} placeholder="Brief description of the deck" required={true} value={formData.description}></textarea>
  <button onClick={handleClick}>Cancel</button>
  <button type="submit" onClick={handleSubmit} >Create Deck</button>
  </div>
  
  </div>
)
} 

export default CreateDeck