import styles from "./Display.module.css";

const Display = ({display}) => {
  return <input className={styles.display} type="text" placeholder={display}/>;
};

export default Display;
