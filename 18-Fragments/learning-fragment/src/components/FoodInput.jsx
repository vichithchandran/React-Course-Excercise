import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeydown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      onKeyDown={handleKeydown}
    />
  );
};
export default FoodInput;
