import React from "react"

function CardForm({handleChange, data}){
    
    
    
    return (
        <div>
             <label htmlFor="front">Front</label>
        <textarea name="front" onChange={handleChange} value={data.front} placeholder="Front side of card"/>
<label htmlFor="back">Back</label>
        <textarea name="back" onChange={handleChange} value={data.back} placeholder="Back side of card"/>
        </div>
    )
}

export default CardForm