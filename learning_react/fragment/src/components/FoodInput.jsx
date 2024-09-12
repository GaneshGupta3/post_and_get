import { useState } from "react";
import styles from "./FoodInput.module.css";

function FoodInput({ handleKeyDown, handleAdd, handleRemove }) {  // Changed handleonChange to handleOnChange

    let [eventState , setEventState] = useState();

    return (
        <div className={styles.addInput}>
            <input
                type="text"
                placeholder="Enter food item"
                className={styles.foodInput}
                onKeyDown={(event) => {handleKeyDown(event); setEventState(event)}} // Using the correct prop name here
                />
            <button onClick={() => { handleAdd(eventState.target.value); eventState.target.value = "" }}>Add</button>
            <button onClick={() => { handleRemove(eventState.target.value); eventState.target.value = "" }}>Rm</button>
        </div>
    );
}

export default FoodInput;
