import { useState } from "react"
import Board from "./Board"

const Game = () => {
  const [player, setPlayer] = useState<boolean>(false)
  const [showResetGame, setShowResetGame] = useState<boolean>(false)
  const [winner, setWinner] = useState<string>('')
  const [data, setData] = useState<string[]>(Array(9).fill(null))

  const determineWinner = (newArray: string[]): string => {
    const winningRules:number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    let winningPlayer = ''

    winningRules.map((value: number[]) => {
      const [a, b, c] = value
      if (newArray[a] && newArray[a] === newArray[b] && newArray[a] === newArray[c]) {
        winningPlayer = newArray[a]
      }
    })

    return winningPlayer
  }

  const handleBoardClick = (index: number): void => {
    const identifyPlayer:string = player ? 'X' : 'O'

    const newArray = data.map((value: string, idx: number): string => {
      if (index === idx) {
        return identifyPlayer
      } else {
        return value
      }
    })

    setData(newArray)
    setPlayer(!player)
    determineWinner(newArray)

    const winningPlayer:string = determineWinner(newArray)
    setWinner(winningPlayer)

    if (winningPlayer) {
      setShowResetGame(true)
    }
  }

  const resetGame = (): void => {
    setData(Array(9).fill(null))
    setShowResetGame(false)
    setWinner('')
    setPlayer(false)
  }

  return (
    <Board
      handleBoardClick={handleBoardClick}
      data={data}
      winner={winner}
      showResetGame={showResetGame}
      resetGame={resetGame}
      player={player}
    />
  )
}

export default Game