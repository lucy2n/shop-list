import React from "react";
import styles from './main.module.css'
import { Task } from "../../components/task/task";
import { InputCategoria } from "../../components/input-categoria/input-categoria";
import { InputName } from "../../components/input-name/input-name";
import { InputQuantity } from "../../components/input-quantity/input-quantity";
import beefIcon from '../../images/icons8-beef-100.png';
import cakeIcon from '../../images/icons8-cupcake-100.png';
import ingredientIcon from '../../images/icons8-ingredients-100.png';
import milkIcon from '../../images/icons8-milk-carton-100.png';
import eggIcon from '../../images/icons8-egg-carton-50.png';
import pizzaIcon from '../../images/icons8-salami-pizza-50.png';
import cheeseIcon from '../../images/icons8-cheese-50.png'


export const Main = () => {
    return (
            <div className={styles.container}>
                <img className={styles.cake} src={cakeIcon} alt='cake' />
                <img className={styles.beef} src={beefIcon} alt='beef'/>
                <img className={styles.ingredient} src={ingredientIcon} alt='ingredients'/>
                <img className={styles.milk} src={milkIcon} alt='milk'/>
                <img className={styles.egg} src={eggIcon} alt='egg'/>
                <img className={styles.pizza} src={pizzaIcon} alt='pizza'/>
                <img className={styles.cheese} src={cheeseIcon} alt='cheese'/>
                <h1 className={styles.title}>List</h1>
                <form className={styles.inputs}>
                    <InputName />
                    <InputQuantity />
                    <InputCategoria />
                    <button className={styles.button}></button>
                </form>
                <div className={`custom-scroll ${styles.wrapper}`}>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
    )
}