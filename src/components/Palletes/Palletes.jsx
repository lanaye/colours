import { PalletesChar, PalletesWithSquare, PalletesCharSizes, Squares } from '../../palletes';


function Palletes({filter}) {

  const getColorForCharacters = (colours, counts) => {
    return colours.map((color, index) => {
        return <div className='pallete-color'>
            <div className='square' style={{backgroundColor: `#${color}`}}></div>
            {index+1}. {color} ({counts[index]} jar(s))
        </div> 
      })
  }

  const getJars = (colours, counts) => {
    const allJars = colours.map((color, index) => {
      let jars = [];
      const reg = new RegExp('^[0-4]')
      let textColor = reg.test(color) ? 'white' : 'black';
      for(let i=0; i<counts[index]; i++) {
        jars.push(<div className='circle' style={{color: textColor, backgroundColor: `#${color}`}}>{index + 1}</div>);
      }

      return jars;
    })
    let jars = []
    for(let i=0; i<allJars.length;i++) {
      jars.push(...allJars[i])
    }
    return [].concat.apply([],
      jars.map(function(elem, i) {
        return i % 6 ? [] : [jars.slice(i, i + 6)];
      })
    );
  }
  const listCharacters = Object.keys(PalletesChar).filter((char) => char.includes(filter)).map((char) => {
    const colours = getColorForCharacters(PalletesChar[char], PalletesWithSquare[char])
    const jars = getJars(PalletesChar[char], PalletesWithSquare[char]).map((ar) => {
      return <div className='jars'>{ar}</div>
    })

    return <div className='palette'>
          <h2>{char}</h2>
          <h3>{PalletesCharSizes[char]}({Squares[PalletesCharSizes[char]]})</h3>
          <h5>{PalletesWithSquare[char].reduce((prev, cur) => prev+cur, 0)} jar(s)</h5>
          <div className='all-jars'>
            {jars}
          </div>
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
