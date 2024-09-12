import Item from "./Item.jsx";
import { useState } from "react";

const FoodItems = (props) => {

    let[activeItems,setActiveItems] = useState([]);

    function onBuyButton(item,event){
        if(activeItems.includes(item)){
            let newActiveItems = activeItems.filter(activeItem=> activeItem !== item);
            setActiveItems(newActiveItems);
            console.log(event);
        }
        else{
            setActiveItems([...activeItems,item]);
            console.log(event);
        }
    }
    
    return (
        <ul className="list-group">
            {props.items.map((item) => <Item foodItem = {item} key={item} handleBuyButton={onBuyButton} bought={activeItems.includes(item)}></Item>)}
        </ul>
    );
};

export default FoodItems;