import './index.css';
import Checkmark from './components/Checkmark';
import Randomizer from './components/Randomizer';

function App() {
  const itemList = Randomizer()
  
  return (
    <div className="App">
      <h1>Tonipal Bingo</h1>
      <section id="table">
        <div className="box a">{itemList[0]}<Checkmark /></div>
        <div className="box b">{itemList[1]}<Checkmark /></div>
        <div className="box c">{itemList[2]}<Checkmark /></div>
        <div className="box d">{itemList[3]}<Checkmark /></div>
        <div className="box e">{itemList[4]}<Checkmark /></div>
        <div className="box f">{itemList[5]}<Checkmark /></div>
        <div className="box g">{itemList[6]}<Checkmark /></div>
        <div className="box h">{itemList[7]}<Checkmark /></div>
        <div className="box i">{itemList[8]}<Checkmark /></div>
        <div className="box j">{itemList[9]}<Checkmark /></div>
        <div className="box k">{itemList[10]}<Checkmark /></div>
        <div className="box l">{itemList[11]}<Checkmark /></div>
        <div className="box m">{itemList[12]}<Checkmark /></div>
        <div className="box n">{itemList[13]}<Checkmark /></div>
        <div className="box o">{itemList[14]}<Checkmark /></div>
        <div className="box p">{itemList[15]}<Checkmark /></div>
      </section>
      <br/>
      <button style={{marginLeft: "300px", float: "left"}} className="button">Submit</button>
      <button style={{marginRight: "300px", float: "right"}} className="button">Leaderboards</button>
    </div>
  );
}

export default App;
