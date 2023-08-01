'use client';

import styles from './page.module.scss';

import { useRef } from 'react';

export default function WordsearchSizeContainer() {
    
    const widthRef = useRef(null);
    const heightRef = useRef(null);

    return (
        <div className={styles.inputContainer}>
            <div className={styles.sizeContainer}>
                <input name="width" title="Width" type="number" ref={widthRef} className={styles.sizeInput} min="1" max="100" defaultValue="10" />
                <div className={styles.sizeSeperator}>x</div>
                <input name="height" title="Height" type="number" ref={heightRef} className={styles.sizeInput} min="1" max="100" defaultValue="10" />
            </div>
            <button className={styles.button}>Start</button>
        </div>
    )
}