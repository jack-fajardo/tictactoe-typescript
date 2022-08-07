import Square from './Square'

const style = {
  border: '6px solid teal',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '200px 200px 0px 200px',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

interface boardProps {
  data: string[],
  handleBoardClick: (index: number) => void,
  winner: string,
  showResetGame: boolean
  resetGame: () => void
  player: boolean
}

const Board = ({
  data,
  handleBoardClick,
  winner,
  showResetGame,
  resetGame,
  player
}: boardProps) => {

  return (
    <div>
      <div style={style}>
        {
          data.map((value: string, index: number) => (
            <Square
              key={index}
              value={value}
              handleBoardClick={() => handleBoardClick(index)}
              winner={winner}
            />
          ))
        }
      </div>
      {
        !winner && (
          <div>
            Current Player: {player ? 'X' : 'O'}
          </div>
        )
      }
      {
        winner && (
          <div>
            Winner: {winner}
          </div>
        )
      }
      {
        showResetGame && (
          <button onClick={() => resetGame()}>
            New Game
          </button>
        )
      }
    </div>
  )
}

export default Board