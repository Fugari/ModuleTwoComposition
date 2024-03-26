import PropTypes from 'prop-types';
import styles from './Game.module.css';
import { Field } from './components/Field/Field';
import { Information } from './components/Info/Information';

export const GameLayout = ({ resetGame, field, handleClickCell, currentPlayer, isGameEnded, isDraw }) => {
    
    const StartButton = () => {
        return <button 
                    className={isGameEnded ? styles.StartBtn : styles.NotActive} 
                    onClick={resetGame} 
                    disabled={!isGameEnded}> 
                        {!isGameEnded ? 'Game is running' : 'Start New Game'}
                </button>
    }

    return (
        <div className={styles.App}>
            <StartButton />

            <Field 
                fc={handleClickCell} 
                data={field}
            />

            <Information 
                currentPlayer={currentPlayer}
                isDraw={isDraw}
                isGameEnded={isGameEnded}
            />
        </div>
    )
}

GameLayout.propTypes = {
    field: PropTypes.array,
    handleClickCell: PropTypes.func,
    currentPlayer: PropTypes.string,
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    resetGame: PropTypes.func
}