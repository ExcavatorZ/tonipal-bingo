import './index.css';
import {Checkmark} from './components/Checkmark';
import {Randomizer} from './components/Randomizer';

function App() {
  
  return (
    <div className="App">
      <h1>Tonipal Bingo</h1>
        <Randomizer />
      <br/>
      {/*<button style={{marginLeft: "300px", float: "left"}} className="button">Submit</button>
      <button style={{marginRight: "300px", float: "right"}} className="button">Leaderboards</button>*/}
    </div>
  );
}

export default App;
