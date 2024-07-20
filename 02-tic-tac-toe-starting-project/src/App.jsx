import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { act, useState } from 'react'
import Log from './components/Log';
function App() {
  const[gameTurns,setGameTurns] = useState([])
  const [activePlayer,setActivePlayer] = useState('X');
  
  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((currActivePlayer)=>{
      return currActivePlayer==='X'?'O':'X';
    })
    setGameTurns(prevTurns=>{
      let currentPlayer = 'X';

      if(prevTurns.length >0 && prevTurns[0].player==='X'){
        currentPlayer = 'O'
      }

      const updatedTurns=[{square:{row:rowIndex , col:colIndex},player:currentPlayer}, ...prevTurns];
      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
            <Player name='Player 1' symbol="X" isActive={activePlayer==='X'}/>
            <Player name='Player 2' symbol='O' isActive={activePlayer==='O'}/>
        </ol> 
        <GameBoard onSelectSqaure={handleSelectSquare} 
        turns={gameTurns}
        /> 
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
