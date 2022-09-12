import './index.css';
import Checkmark from './components/Checkmark';
import Randomizer from './components/Randomizer';

function App() {
  const itemList = Randomizer()
  
  return (
    <div className="App">
      <h1>Tonipal Bingo</h1>
      <section id="table">
        <div class="box a">{itemList[0]}<Checkmark /></div>
        <div class="box b">{itemList[1]}<Checkmark /></div>
        <div class="box c">{itemList[2]}<Checkmark /></div>
        <div class="box d">{itemList[3]}<Checkmark /></div>
        <div class="box e">{itemList[4]}<Checkmark /></div>
        <div class="box f">{itemList[5]}<Checkmark /></div>
        <div class="box g">{itemList[6]}<Checkmark /></div>
        <div class="box h">{itemList[7]}<Checkmark /></div>
        <div class="box i">{itemList[8]}<Checkmark /></div>
        <div class="box j">{itemList[9]}<Checkmark /></div>
        <div class="box k">{itemList[10]}<Checkmark /></div>
        <div class="box l">{itemList[11]}<Checkmark /></div>
        <div class="box m">{itemList[12]}<Checkmark /></div>
        <div class="box n">{itemList[13]}<Checkmark /></div>
        <div class="box o">{itemList[14]}<Checkmark /></div>
        <div class="box p">{itemList[15]}<Checkmark /></div>
      </section>
    </div>
  );
}

export default App;
