import { useState } from 'react';
import './App.css';
import Colours from './components/Colours/Colours';
import Palletes from './components/Palletes/Palletes';


function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'colours')
  const [filter, setFilter] = useState('')

  const changeTheme = () => {
    const newTheme = theme === 'colours' ? 'palletes' : 'colours';
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }
  
  return (
    <div>
      <div className='header'>
        <button onClick={changeTheme}>Change to {theme === 'colours' ? 'palletes' : 'colours'}</button>
        <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
        <div>
          <div>100ml = 190g ~ 50*3.6g</div>
          <div>  50ml =  95g ~ 25*3.6g</div>
        </div>
      </div>
      {theme === 'colours' ? <Colours filter={filter}/> : <Palletes filter={filter}/>}
    </div>
    );
}

export default App;
