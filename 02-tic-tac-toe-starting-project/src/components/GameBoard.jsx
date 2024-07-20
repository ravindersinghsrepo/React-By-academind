
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]    
]
export default function GameBoard({onSelectSqaure , turns}){
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square , player} = turn; 
        const{row,col}= square ;

        gameBoard[row][col] = player;
    }

    // const [gameBoard,setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIdx,colIdx){
    //     setGameBoard((prevgameboard)=>{
    //         const updatedBoard = [...prevgameboard.map((innerArray)=>[...innerArray])];
    //         updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSqaure();
    // }
    return(
        <ol id="game-board">
             {gameBoard.map((row,rowIdx)=>{
                return(<li key={rowIdx}>
                    <ol>
                    {row.map((playerSymbol,colIdx)=>{
                        return(<li key={colIdx}>
                            <button onClick={()=>onSelectSqaure(rowIdx , colIdx)}>{playerSymbol}</button>
                        </li>)
                    })}
                    </ol>
                </li>)
             })}
        </ol>
    )
}