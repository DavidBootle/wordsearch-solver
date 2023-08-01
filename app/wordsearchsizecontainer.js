'use client';

import styles from './page.module.scss';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function WordsearchSizeContainer() {
    
    const widthRef = useRef(null);
    const heightRef = useRef(null);

    const router = useRouter();

    function submit(event) {
        event.preventDefault();
        const width = widthRef.current.value;
        const height = heightRef.current.value;
        router.push(`/setup?width=${width}&height=${height}`);
    }

    return (
        <div className={styles.inputContainer}>
            <div className={styles.sizeContainer}>
                <input name="width" title="Width" type="number" ref={widthRef} className={styles.sizeInput} min="1" max="100" defaultValue="10" />
                <div className={styles.sizeSeperator}>x</div>
                <input name="height" title="Height" type="number" ref={heightRef} className={styles.sizeInput} min="1" max="100" defaultValue="10" />
            </div>
            <button className={styles.button} onClick={submit}>Start</button>
        </div>
    )
}