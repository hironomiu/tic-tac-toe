import React, { useState } from 'react'
import { BsFillCircleFill, BsXLg, BsApp } from 'react-icons/bs'

const App = () => {
  const OPEN = 0
  const FIRST = 1
  const SECOND = 2
  // const DRAW = 3

  const [turn, setTurn] = useState(FIRST)
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])

  const showTurn = () => {
    if (turn === FIRST) return '先手'
    if (turn === SECOND) return '後手'
    return '手番の値が不適切です'
  }

  const initTurn = () => {
    setTurn(FIRST)
  }

  const changeTurn = () => (turn === FIRST ? setTurn(SECOND) : setTurn(FIRST))

  const initBoard = () => {
    setBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  }

  // 水平方向の勝利判定
  const checkBoardHorizontal = (turn) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === turn &&
        board[i][1] === turn &&
        board[i][2] === turn
      ) {
        return true
      }
    }
  }

  // 垂直方向の勝利判定
  const checkBoardVertical = (turn) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === turn &&
        board[1][i] === turn &&
        board[2][i] === turn
      ) {
        return true
      }
    }
  }

  // 対角方向の勝利判定
  const checkBoardDiagonal = (turn) =>
    board[0][0] === turn && board[1][1] === turn && board[2][2] === turn

  // 逆対角方向の勝利判定
  const checkBoardInverseDiagonal = (turn) =>
    board[0][2] === turn && board[1][1] === turn && board[2][0] === turn

  // 手番turnが勝ちであることの判定。相手が勝っているかは判定しない
  const isWinSimple = (turn) => {
    return checkBoardHorizontal(turn) ||
      checkBoardVertical(turn) ||
      checkBoardDiagonal(turn) ||
      checkBoardInverseDiagonal(turn)
      ? true
      : false
  }

  // 手番turnが勝ちであることの判定。相手が勝っていないことも判定
  const isWinActual = (turn) => {
    if (!isWinSimple(turn)) return false
    if (turn === FIRST) {
      if (isWinSimple(SECOND)) return false
    } else {
      if (isWinSimple(FIRST)) return false
    }
    return true
  }

  // 盤面に空きがないことの判定
  const isFull = () =>
    JSON.stringify(board).indexOf('0') === -1 ? true : false

  // 引き分けの判定
  const isDraw = () =>
    isWinSimple(FIRST) || isWinSimple(SECOND) || !isFull() ? false : true

  const play = (i, j) => {
    if (board[i][j] === OPEN) {
      const tmp = [...board]
      tmp[i][j] = turn
      setBoard(tmp)
      if (isDraw()) setTimeout(() => alert('引き分け'))
      if (isWinActual(turn)) setTimeout(() => alert(showTurn() + 'の勝利'))
      changeTurn()
    } else {
      alert(`Not empty i:${i},j:${j}`)
    }
  }
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col">
        <div className="flex justify-center text-4xl">
          <h1>三目並べ</h1>
        </div>
        <div className="flex justify-center text-2xl mt-10">{showTurn()}</div>
        <div className="flex flex-row justify-center mt-10 text-4xl">
          {board.map((line, i) => (
            <div key={i}>
              {line.map((square, j) => (
                <span key={j} onClick={() => play(i, j)}>
                  {square === OPEN ? (
                    <BsApp />
                  ) : square === FIRST ? (
                    <BsFillCircleFill />
                  ) : (
                    <BsXLg />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            className="bg-gray-400 rounded py-1 px-4"
            onClick={() => {
              initBoard()
              initTurn()
            }}
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
