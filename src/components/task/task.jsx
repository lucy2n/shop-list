import React from "react";
import styles from './task.module.css';
import { Categoria } from "../categoria/categoria";
import { icons } from "../../utils/constants";
import { colors } from '../../utils/constants'

export const Task = () => {
    return (
       <div className={styles.task}>
            <div className={styles.main}>
                <label>
                    <input className={styles.visually_hidden} type="checkbox" id="happy" name="happy" value="yes"></input>
                    <span></span>
                </label>
                <div className={styles.information}>
                    <p className={styles.product__name}>Maçã</p>
                    <p className={styles.product__quantity}>2 unidades</p>
                </div>
            </div>
            <div className={styles.flex}>
                <Categoria name={'meet'} icon={icons.meet} color={colors.pink}/>
                <button className={styles.delete}></button>
            </div>
       </div>
    )
}