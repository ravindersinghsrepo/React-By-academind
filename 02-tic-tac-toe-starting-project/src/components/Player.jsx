import { useState } from "react"

export default function Player({initialname,symbol,isActive , onChangeName}){
    const[isEditing , setIsEditing] = useState(false);
    const[playerName , setPlayerName] = useState(initialname);

    function handleEditClick(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
            onChangeName(symbol , playerName)
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayername = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayername = <input type="text" required value={playerName} onChange={handleChange}/>;
    }

    return(
        <li className={isActive?'active': undefined}>
            <span className="player">
            {editablePlayername}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}
            >{isEditing?'Save':'Edit'}</button>
        </li> 
    )
}