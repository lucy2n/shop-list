import React from "react";
import styles from './input-quantity.module.css'

export const InputQuantity = () => {
    return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <input className={styles.input} type='text' id="input-quantity"></input>
                    <label htmlFor="input-quantity" className={styles.label}>Quantity</label> 
                </div>
                <select className={styles.select} name="quantity">
                    <option value="">Lb.</option>
                    <option value="">L</option>
                    <option value="">Kg</option>
                </select>
            </div>
    )
}