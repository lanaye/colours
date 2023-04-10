import { PalletesChar, PalletesWithSquare, PalletesCharSizes, Squares } from '../../palletes';


function Palletes() {

  const getColorForCharacters = (colours, counts) => {
    return colours.map((color, index) => {
        return <div className='pallete-color'>
            <div className='square' style={{backgroundColor: `#${color}`}}></div>
            {index+1}. {color} ({counts[index]} jar(s))
        </div> 
      })
  }

  const listCharacters = Object.keys(PalletesChar).map((char) => {
    const colours = getColorForCharacters(PalletesChar[char], PalletesWithSquare[char])
    return <div className='palette'>
          <h2>{char}</h2>
          <h3>{PalletesCharSizes[char]}({Squares[PalletesCharSizes[char]]})</h3>
          <h5>{PalletesWithSquare[char].reduce((prev, cur) => prev+cur, 0)} jar(s)</h5>
          {colours}
      </div>
  })

  return (
    <div>
      <h2 className="count">{Object.keys(PalletesChar).length} - characters</h2>
      <div className="App palletes">
        {listCharacters}
      </div>
    </div>
    );
}

export default Palletes;
