import React, { useLayoutEffect, useState } from 'react'
import './Game.css'
import Tile from './Tile'
import { keysRows } from '../Constants'


function Game({letterCount}) {

  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letter: 0})
  const [answer, setAnswer] = useState("apes")
  const [guessedLetters, setGuessedLetters] = useState([])
  const [board, setBoard] = useState([])


  function onEnter() {
    if (currentAttempt.letter !== letterCount) return

    let currWord = ""
    for (let i = 0; i < letterCount; i++) {
      currWord += board[currentAttempt.attempt][i]
    }


    if (currWord === answer) {
      alert('Congrats')
    }

    if (currentAttempt.attempt === letterCount) {
      alert('game over')
    }
  }

  function onDelete() {
    if (currentAttempt.letter === 0) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letter - 1] = ""
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letter: currentAttempt.letter - 1 })
  }

  function onSelectLetter(key) {
    if (currentAttempt.letter > letterCount - 1) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letter] = key
    setBoard(newBoard)
    setCurrentAttempt({
      attempt: currentAttempt.attempt,
      letter: currentAttempt.letter + 1
    })

  }

  function handeClick() {
    console.log('click')
  }


  function generateTiles() {
    let rows = Array(letterCount).fill("")
    let board = Array(letterCount+1).fill(rows)
    setBoard(board)

  }
  useLayoutEffect(() => {
    generateTiles()
  }, [])
  return (
    <div className='game'>
      <div className='game__tileContainer'>
        {board.map((tileRow, rowIndex) => (
          <div className='game__tileRow'>
            {tileRow.map((tile, index) => (
              <Tile position={index} attempt={rowIndex}/>
            ))}
          </div>
        ))}
      </div>
      <div className='game__keyContainer'>
        {keysRows.map((keyRow, index) => (
          <div className='game__keyRow' key={index}>
            {keyRow.map((key, index) => (
              <button className='game__keyBtn' onClick={() => handeClick(key)} key={index}>{key}</button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Game