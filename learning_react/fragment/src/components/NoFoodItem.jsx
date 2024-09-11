const NoFoodItems = (props) => {
    return (
        <>
            { props.items.length === 0 && <h3>I am still hungry</h3>}
        </>
    );
  };
  
  export default NoFoodItems;
  