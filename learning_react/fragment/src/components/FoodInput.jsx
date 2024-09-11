import styles from "./FoodInput.module.css";

function FoodInput ({handleonChange}){
    
    return (
        <input type="text" placeholder="enter food Item" className={styles.foodInput} onChange={(event)=>handleOnChange(event)}/>
    )
}
export default FoodInput;