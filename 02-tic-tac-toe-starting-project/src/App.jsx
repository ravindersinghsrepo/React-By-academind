import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { act, useState } from 'react'
import Log from './components/Log';
import {WINNING_COMBINATIONS} from './assets/winning-combinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]    
]

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player===currentPlayer){
    currentPlayer = 'O';
  }
  return currentPlayer ; 
}

function App() {
  const[playerName , setPlayerName] = useState({
    'X' :'Player 1',
    'O' :'Player 2'
  })
  const[gameTurns,setGameTurns] = useState([])

  let activePlayer = deriveActivePlayer(gameTurns);
   
  let gameBoard= [...initialGameBoard.map((arr)=>[...arr])] ; 

  for(const turn of gameTurns){
    const {square , player} = turn;
    const {row , col} = square;
    gameBoard[row][col] = player
  }
  let winner ;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol ===secondSquareSymbol && firstSquareSymbol ===thirdSquareSymbol && !winner){
      winner = playerName[firstSquareSymbol] ; 
    }

  }
  const gameDraw = gameTurns.length==9 && !winner; 

  function handleSelectSquare(rowIndex,colIndex){
  
    setGameTurns(prevTurns=>{
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns=[{square:{row:rowIndex , col:colIndex},player:currentPlayer}, ...prevTurns];

      return updatedTurns;
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol , newName){
    setPlayerName(prevPlayerName=>{
      return{
        ...prevPlayerName , 
        [symbol] : newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
            <Player initialname='Player 1' symbol="X" isActive={activePlayer==='X'} onChangeName = {handlePlayerNameChange}/>
            <Player initialname='Player 2' symbol='O' isActive={activePlayer==='O'} onChangeName = {handlePlayerNameChange}/>
        </ol> 
        {(winner || gameDraw) && <GameOver winner={winner} onGameRestart={handleRestart}/>}
        <GameBoard onSelectSqaure={handleSelectSquare} 
        board={gameBoard}
        /> 
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
