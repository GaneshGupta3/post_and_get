import styles from "./Item.module.css"

const Item = ({foodItem})=> {//destructuring is done in the parameter
    console.log(styles);
    return <li className={`list-group-item ${styles.kg}`}>{foodItem}</li>
}
export default Item;