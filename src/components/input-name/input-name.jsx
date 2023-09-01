import React from "react";
import styles from './input-name.module.css'

export const InputName = () => {
    return (
        <div className={styles.main}>
            <input className={styles.input} type='text' id='input-name'/>
            <label className={styles.label} htmlFor='input-name'>Item</label>
        </div>
    )
}