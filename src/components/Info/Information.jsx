import { InformationLayout } from './InformationLayout';

export const Information = ({ currentPlayer, isDraw, isGameEnded }) => {

  return (
    <InformationLayout 
      currentPlayer={currentPlayer}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
    />
  )
}
