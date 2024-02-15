import "./InputBox.css";
// import { useState } from "react";
import convertToCamelCase from "../../util/helper";

function InputBox({ labelText, inputType, investments, onChange }) {
  const deriveId = labelText.toLowerCase().replace(/\s+/g, "-");
  const deriveKey = convertToCamelCase(labelText);
  console.log(deriveKey);

  // const [inputValue, setInputValue] = useState();

  function handleInputValue(event) {
    onChange(deriveKey, +event.target.value);
  }

  return (
    <div>
      <label htmlFor={deriveId}>{labelText}</label>
      <input
        id={deriveId}
        type={inputType}
        value={investments[deriveKey]}
        onChange={handleInputValue}
      />
    </div>
  );
}

export default InputBox;
