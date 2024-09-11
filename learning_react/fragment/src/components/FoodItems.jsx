import Item from "./Item.jsx";

const FoodItems = (props) => {
    
    return (
        <ul className="list-group">
            {props.items.map((item) => <Item foodItem = {item} key={item} handleBuyButton={(event)=>console.log(item)}></Item>)}
        </ul>
    );
};

export default FoodItems;