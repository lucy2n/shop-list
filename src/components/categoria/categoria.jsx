import React from "react";
import styles from "./categoria.module.css"

export const Categoria = ({name, icon, color}) => {
    return (
        <div className={styles.main} style={{background: `${color.background}`}}>
            <img src={icon} alt='eat'/>
            <p className={styles.text} style={{ color: `${color.text}` }}>{name}</p>
        </div>
    )   
}