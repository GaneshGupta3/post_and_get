import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./components/FoodItems.jsx"
import NoFoodItems from "./components/NoFoodItem.jsx"
import Container from "./components/Container.jsx"
import FoodInput from './components/FoodInput.jsx';
import { useState } from 'react';

function App() {
  // let foodItems = [];

  let [foodItems , setFoodItems] = useState(["vegetables", "milk", "salad", "braucli", "haldi"]);

  // let [textToShow , setTextToShow] = useState("Food item entered by the user : ");

  function onKeyDown(event){//this method is passed by parent to communicate
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      console.log(newFoodItem);
      setFoodItems([...foodItems , newFoodItem]);
      event.target.value = "";
    }
  }
  function handleAdd(newFoodItem){
    setFoodItems([...foodItems , newFoodItem]);
  }

  function handleRemove(removeItem){
    let newFoodItems = foodItems.filter(item=> item !== removeItem);
    setFoodItems(newFoodItems);
  }
  
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} handleAdd={handleAdd} handleRemove={handleRemove}></FoodInput>
        <NoFoodItems items={foodItems}></NoFoodItems>
        <FoodItems items= {foodItems} ></FoodItems>
      </Container>
      <Container><h1>hello</h1></Container>
    </>
  );
}

export default App;
