import styles from "./Item.module.css"

const Item = ({ foodItem,handleBuyButton, bought }) => {//destructuring is done in the parameter
    
    return (
        <>
            <li className={`list-group-item ${styles.kg} ${bought && "active"}`}>
                <span>{foodItem}</span>
                <button type="button" className={"btn btn-info "+ styles.button} onClick={(event)=>{handleBuyButton(foodItem,event)}}>{bought?"remove" : "buy"}</button>
            </li>
        </>
    )
}
export default Item;