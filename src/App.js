import { useState } from 'react';
import './App.css';
import Colours from './components/Colours/Colours';
import Palletes from './components/Palletes/Palletes';


function App() {

  const [theme, setTheme] = useState('colours')

  return (
    <div>
      <div className='header'>
        <button onClick={() => setTheme(theme === 'colours' ? 'palletes' : 'colours')}>Change to {theme === 'colours' ? 'palletes' : 'colours'}</button>
        <div>
          <div>100ml = 190g ~ 50*3.6g</div>
          <div>  50ml =  95g ~ 25*3.6g</div>
        </div>
      </div>
      {theme === 'colours' ? <Colours /> : <Palletes />}
    </div>
    );
}

export default App;
