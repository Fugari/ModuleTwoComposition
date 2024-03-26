import styles from './Field.module.css';

export const FieldLayout = ({fc, data}) => {
    
    return (
        <div className={styles.FieldContainer}>
            {data.map((cell, index) => 
                <div 
                key={index} 
                className={cell !== '' 
                    ? styles.FieldCellsActive 
                    : styles.FieldCells}
                onClick={() => fc(index)}>
                    {cell}
                </div>
            )}
        </div>
    )
}
