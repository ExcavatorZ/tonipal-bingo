import './index.css';
import Checkmark from './components/Checkmark';

function App() {
  return (
    <div className="App">
      <h1>Tonipal Bingo</h1>
      <section id="table">
        
        <div class="box a">Kahvi<Checkmark /></div>
        <div class="box b">Energiajuoma<Checkmark /></div>
        <div class="box c">Kuohuvesi<Checkmark /></div>
        <div class="box d">Leipä<Checkmark /></div>
        <div class="box e">Nyssykkä<h1>X</h1></div>
        <div class="box f">Patukka<Checkmark /></div>
        <div class="box g">Mikroateria<Checkmark /></div>
        <div class="box h">Sushi<Checkmark /></div>
        <div class="box i">Palautusjuoma<Checkmark /></div>
        <div class="box j">Banaani<Checkmark /></div>
        <div class="box k">Jogurtti<Checkmark /></div>
        <div class="box l">Makeispussi<Checkmark /></div>
        <div class="box m">Pähkinäpussi<Checkmark /></div>
        <div class="box n">Energiavesi<Checkmark /></div>
        <div class="box o">Tikkukaramelli<Checkmark /></div>
        <div class="box p">(Insert item)<Checkmark /></div>
      </section>
    </div>
  );
}

export default App;
