import { useState } from 'react';
import './App.css';
import Colours from './components/Colours/Colours';
import Palletes from './components/Palletes/Palletes';


function App() {

  const [theme, setTheme] = useState('colours')

  return (
    <div>
      <button onClick={() => setTheme(theme === 'colours' ? 'palletes' : 'colours')}>Change to {theme === 'colours' ? 'palletes' : 'colours'}</button>
      {theme === 'colours' ? <Colours /> : <Palletes />}
    </div>
    );
}

export default App;
