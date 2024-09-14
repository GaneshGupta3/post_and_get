import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
import ShowHistory from "./components/ShowHistory";

function App() {
  let [expressionToResolve, setExpressionToResolve] = useState("");
  let [calculationHistory, setCalculationHistory] = useState([]);
  let [hisClicked , setHisClicked] = useState(false)

  async function onButtonClick(key) {
    if (key === "=") {
      try {
        // Use eval to evaluate the expression safely, but consider alternatives for real projects   
        await setCalculationHistory([...calculationHistory, expressionToResolve]);
        console.log(calculationHistory);
        setExpressionToResolve(eval(expressionToResolve).toString());

      } catch (error) {
        setExpressionToResolve("Error");
      }
    }
    else if (key === "C") {
      setExpressionToResolve("");
    }
    else if (key === "His.") {
      console.log(calculationHistory);
      {hisClicked ? setHisClicked(false) : setHisClicked(true)}

    } else {
      // Append the clicked key to the current expression
      setExpressionToResolve((prev) => prev + key);
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display display={expressionToResolve}></Display>
        <ButtonsContainer handleButtonClick={onButtonClick}></ButtonsContainer>
      </div>
      <ShowHistory history={calculationHistory} showHistory={hisClicked}></ShowHistory>
    </>
  );
}

export default App;
