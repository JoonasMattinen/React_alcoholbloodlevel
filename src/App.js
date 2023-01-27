
import './App.css';

function App() {
  return (
    <form>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>Weight </label>
        <input type="number" />
      </div>
      <div>
        <label>Bottles </label>
        <input type="number"></input>
      </div>
      <div>
        <label>time </label>
        <input type="number" />
      </div>
      <div>
        <input type="radio" />
        <label>Male</label>
        <input type="radio" />
        <label>Female</label>
      </div>
      <output></output>
      <button type="butotn">Calculate</button>
    </form>
  );
}

export default App;
