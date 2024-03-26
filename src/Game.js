import { useState } from 'react';
import { GameLayout } from './GameLayout';

const cellsArray = new Array(9).fill(''); 

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const isWinner = (field, currentPlayer) => {
  return WIN_PATTERNS.some((pattern) => 
    pattern.every((cellID) => field[cellID] === currentPlayer) 
  ) 
}

export const Game = () => {
  const [field, setField] = useState(cellsArray); 
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  
  const handleClickCell = (index) => {
    if (!field.includes('')) {
      setIsDraw(true);
      setIsGameEnded(true);
      return null;
    }
    if (field[index] !== '' || isGameEnded) {
      return null;
    }

    const newFields = field.slice();
    newFields[index] = currentPlayer;
    setField(newFields);
    
    if(isWinner(newFields, currentPlayer)) {
      setIsGameEnded(true);
      return null;
    };

    setCurrentPlayer((prev) => prev === '0' ? 'X' : '0'); 
  
  }

  const resetGame = () => {
    setField(Array(9).fill(''));
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
  }

  return (
    <GameLayout 
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      handleClickCell={handleClickCell}
      resetGame={resetGame}
    />
    
  )
}
