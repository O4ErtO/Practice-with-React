import './img/stolas.jpeg';

import './App.css';
import But from './buttons/Like.jsx';
import Input from './buttons/input';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="header">
  <div className="info">
  <h4><p>Что такое 1010101?</p></h4>
    <h1>Двоичное представление информации</h1>
    <div className="meta">
      <a  href="https://vk.com/04rtem4ik0" target="_b" className="author"></a>
      By <a href="https://vk.com/04rtem4ik0" target="_b">Artem Vekshin</a> 
    </div>
  </div>
</div>
<div>
  <Input/>
</div>
<section class="content">



 <But/>
</section>
      </header>
    </div>
  );

}



export default App;
