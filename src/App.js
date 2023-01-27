
import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setweight] = useState(0)
  const [bottles, setbottles] = useState(0)
  const [time, settime] = useState(0)
  const [gender, setgender] = useState("male")
  const [result, setresult] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let alcoholLeft = grams - (burning * time)
    

    if(gender === "male"){
      alcoholLeft = grams / (weight * 0.7)
    }
    else{
      alcoholLeft = grams / (weight * 0.6)
    }
    setresult(alcoholLeft)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>Weight </label>
        <input type="number" name="weight" value={weight} onChange={e => setweight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles </label>
        <input type="number" name="bottles" value={bottles} onChange={e => setbottles(e.target.value)}></input>
      </div>
      <div>
        <label>time </label>
        <input type="number" name="time" value={time} onChange={e => settime(e.target.value)}></input>
      </div>
      <div>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setgender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setgender(e.target.value)} /><label>Female</label>
      </div>
      <output>{result.toFixed(0)} </output>
      <button type="button">Calculate</button>
    </form>
  );
}

export default App;
