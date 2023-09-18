import React from "react";
import styles from './input-categoria.module.css';

export const InputCategoria = () => {
    return (
        <div>
            <select className={styles.select} name="quantity">
                    <option value="">Chesse</option>
                    <option value="">Milk</option>
                    <option value="">Vegetable</option>
                    <option value="">Fruit</option>
                    <option value="">Meet</option>
                </select>
        </div>
    )
}