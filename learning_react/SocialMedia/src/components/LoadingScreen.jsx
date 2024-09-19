import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.fetchingLogo}`} >
      <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingScreen;
