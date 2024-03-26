import styles from './Information.module.css';

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {

    return (
        <div className={styles.InfoText}>{isGameEnded 
            ? isDraw ? 'No winner' : `Winner is: ${currentPlayer}`
            : `Next move is: ${currentPlayer}`}
        </div>
    )
}
