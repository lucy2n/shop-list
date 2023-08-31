import React from "react";
import { Task } from "../../components/task/task";
import styles from "./main.module.css"


export const Main = () => {
    return (
        <div>
            <h1>List</h1>
            <div>
                <Task />
            </div>
        </div>
    )
}