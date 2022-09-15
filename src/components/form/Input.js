import styles from "./Input.module.css";

function Input({ type, text, name, value, placeholder, handleOnChange }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}

export default Input;
