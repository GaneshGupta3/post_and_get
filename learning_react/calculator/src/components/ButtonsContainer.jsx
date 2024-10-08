import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({handleButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
    "His."
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key= {buttonName} className={styles.button} onClick={()=>{handleButtonClick(buttonName);}}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
