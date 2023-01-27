
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
    let gramsleft = grams - (burning * time)
    let alcoholLevel = 0


    if (gender === "male") {
      alcoholLevel = gramsleft / (weight * 0.7)
    }
    else {
      alcoholLevel = gramsleft / (weight * 0.6)
    }
    if (alcoholLevel < 0) {
      alcoholLevel = 0
    }
    if(alcoholLevel)
    setresult(alcoholLevel)
  }
  return (

    <form onSubmit={handleSubmit}>
      <h1>Calculating alcohol blood level</h1>
      <div class="row-mb-3">
        <label class="col-sm-2 col-form-label">Weight </label>
        <input type="number" name="weight" value={weight} onChange={e => setweight(e.target.value)}></input>
      </div>
      <div class="row-mb-3">
        <label class="col-sm-2 col-form-label">Bottles </label>
        <input type="number" name="bottles" value={bottles} onChange={e => setbottles(e.target.value)}></input>
      </div>
      <div class="row-mb-3">
        <label class="col-sm-2 col-form-label">time </label>
        <input type="number" name="time" value={time} onChange={e => settime(e.target.value)}></input>
      </div>
      <div class="row-mb-3">
        <div class="col-sm-10">
          <div>
            <label>Gender</label>
          </div>
          <input class="form-check-input" type="radio" id="gridRadios1" name="gender" value="male" defaultChecked onChange={e => setgender(e.target.value)} />
          <label class="form-check-label" for="gridRadios1">Male</label>
          <input class="form-check-input" type="radio" id="gridRadios2" name="gender" value="female" onChange={e => setgender(e.target.value)} />
          <label class="form-check-label" for="gridRadios2">Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
}

export default App;
