import styles from "./Item.module.css"

const Item = ({ foodItem,handleBuyButton }) => {//destructuring is done in the parameter

    function buyButtonClicked(event){
        console.log(event);
        console.log(foodItem+" Bought");
    }
    
    return (
        <>
            <li className={`list-group-item ${styles.kg}`}>
                <span>{foodItem}</span>
                <button type="button" className={"btn btn-info "+ styles.button} onClick={handleBuyButton}>Buy</button>
            </li>
        </>
    )
}
export default Item;