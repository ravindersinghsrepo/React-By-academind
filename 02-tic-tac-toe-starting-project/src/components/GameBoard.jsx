export default function GameBoard({onSelectSqaure , board}){
    
    return(
        <ol id="game-board">
             {board.map((row,rowIdx)=>{
                return(<li key={rowIdx}>
                    <ol>
                    {row.map((playerSymbol,colIdx)=>{
                        return(<li key={colIdx}>
                            <button onClick={()=>onSelectSqaure(rowIdx , colIdx)} disabled={playerSymbol!==null?true:false}>{playerSymbol}</button>
                        </li>)
                    })}
                    </ol>
                </li>)
             })}
        </ol>
    )
}