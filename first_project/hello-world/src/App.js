import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function calculate(e){
    e.preventDefault();
    const litres =  bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0;
    
    if(gender === "male"){
      result = gramsLeft / (weight * 0.7);
    }
    else{
      result = gramsLeft / (weight * 0.6);
    }

    if(result < 0){
      result = 0;
    }
    
    setResult(result.toFixed
      (2));
  }
  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input value={weight} type="number" step="1" onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <input value={bottles} type="number" step="1" onChange={e => setBottles(e.target.value)}/>
      </div>
      <div>
        <label>Time</label>
        <input value={time} type="number" step="1" onChange={e => setTime(e.target.value)} />
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" id="male" value="male" onChange={e => setGender(e.target.value)} defaultChecked/>
        <label>Male</label>
        <input type="radio" name="gender" id="female" value="female" onChange={e => setGender(e.target.value)}/>
        <label>Female</label>
      </div>
      <div>
        <output>{result}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
  );
}

export default App;
