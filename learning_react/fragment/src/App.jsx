import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./components/FoodItems.jsx"
import NoFoodItems from "./components/NoFoodItem.jsx"
import Container from "./components/Container.jsx"
import FoodInput from './components/FoodInput.jsx';

function App() {
  // let foodItems = [];
  let foodItems = ["vegetables", "milk", "salad", "braucli", "haldi"];

  function handleOnChange(event){//this method is passed by parent to communicate
        console.log(event.target.value);
  }

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <NoFoodItems items={foodItems}></NoFoodItems>
        <FoodInput handleonChange={handleOnChange}></FoodInput>
        <FoodItems items= {foodItems} ></FoodItems>
      </Container>
      <Container><h1>hello</h1></Container>
    </>
  );
}

export default App;
