import './index.css';
import {Randomizer} from './components/Randomizer';
import { Leaderboard } from './components/Leaderboard';
import { Submit } from './components/Submit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <h1>Tonipal Bingo</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Randomizer />} />
          <Route path="/results" element={<Leaderboard />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </Router>
      <br/>
      {/*<button style={{marginLeft: "300px", float: "left"}} className="button">Submit</button>
      <button style={{marginRight: "300px", float: "right"}} className="button">Leaderboards</button>*/}
    </div>
  );
}

export default App;
