
import React from "react"

const style = {
  background: 'turquoise',
  border: '2px solid white',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
  color: 'white'
}

interface squareProps {
  value: string,
  handleBoardClick: React.MouseEventHandler<HTMLButtonElement>,
  winner: string
}

const Square = ({
  value,
  handleBoardClick,
  winner
}: squareProps) => {
  return (
    <button
      disabled={winner ? true : false}
      style={style}
      onClick={handleBoardClick}
    >
      {value}
    </button>
  );
}

export default Square
