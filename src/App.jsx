import InputBox from "./components/InputBox/InputBox";
import Results from "./components/Results/Results";
import { useState } from "react";
function App() {

  const [aggregateInput, setAggregateInput] = useState({
    initialInvestment: 10000, // ja sam svuda stavio empty string
    annualInvestment: 1200,
    expectedReturn: 600,
    duration: 10,
  });

  const isValid = aggregateInput.duration >= 1;


  function handleChangeInvestment(deriveKey, newValue) {
    setAggregateInput((prevAggregateInput) => {
      return {
        ...prevAggregateInput,
        [deriveKey]: newValue
      }
    });
 
  }

  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <InputBox 
          onChange={handleChangeInvestment} labelText="Initial investment" inputType="number"
          investments={aggregateInput} />
          <InputBox onChange={handleChangeInvestment}   labelText="Annual investment" inputType="number" 
          investments={aggregateInput}/>
        </div>
        <div className="input-group">
          <InputBox onChange={handleChangeInvestment}  labelText="Expected return" inputType="number" 
          investments={aggregateInput}/>
          <InputBox onChange={handleChangeInvestment}  labelText="Duration" inputType="number" 
          investments={aggregateInput}/>
        </div>
      </div>
      {isValid && <Results aggregateInputs={aggregateInput}/>}
      {!isValid && <p className="center">Please enter valid duration</p>}
    </main>
  );
}

export default App;
