import { useState } from "react"

export default function Player({name,symbol,isActive}){
    const[isEditing , setIsEditing] = useState(false);
    const[playerName , setPlayerName] = useState(name);

    function handleEditClick(){
        setIsEditing((editing)=>!editing);
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