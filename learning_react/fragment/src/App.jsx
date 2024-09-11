import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./components/FoodItems.jsx"
import NoFoodItems from "./components/NoFoodItem.jsx"

function App() {
  // let foodItems = [];
  let foodItems = ["vegetables", "milk", "salad", "braucli", "haldi"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <NoFoodItems items={foodItems}></NoFoodItems>
      <FoodItems items= {foodItems}></FoodItems>
    </>
  );
}

export default App;
