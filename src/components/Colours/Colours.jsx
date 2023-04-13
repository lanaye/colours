import { PalletesChar, PalletesWithSquare, Char, ColourDecription } from '../../palletes';


function Colours({filter}) {
  
  let uniqueColors = new Set()
  let notUniqueColors = []
  const characters = Object.keys(Char);
  for(let i=0; i<characters.length; i++){
    const pal = PalletesChar[characters[i]];
    for(let k=0; k<pal.length; k++){
      uniqueColors.add(pal[k]);
      notUniqueColors.push(pal[k])
    }
  }

  const getCharactersForColor = (color) => {
    let charactersForColor = [];
    let totalAmountOfJars = 0;
    for(let i=0; i<characters.length; i++){
      const pal = PalletesChar[characters[i]];
      const palS = PalletesWithSquare[characters[i]];
      if(pal.indexOf(color)>=0) {
        let start =0;
        let numbers = [];
        
        for(let i=0; i<pal.length; i++) {
            if(i < pal.indexOf(color)) {
                start+=palS[i]
            } else {
                i = pal.length
            }
        }
        for(let i=0; i<palS[pal.indexOf(color)]; i++) {
            numbers.push(start + i + 1);
        }

        charactersForColor.push({[characters[i]]: `№${pal.indexOf(color) + 1} (${palS[pal.indexOf(color)]} jar(s) : ${numbers})`})
        totalAmountOfJars += palS[pal.indexOf(color)];
      }
    }
    if (!charactersForColor.filter((char) => Object.keys(char)[0].toLowerCase().includes(filter.toLowerCase())).length) {return}
    const list = charactersForColor.map((ch) => {
      return <div>{Object.keys(ch)} {Object.values(ch)}</div>
    })
    return <div>
        <div className='total-amount'>{totalAmountOfJars} jar(s) for all characters</div>
        {list}
    </div>
  }


  const listColors = Array.from(uniqueColors).sort().map((color) => {
    const charactersForColor = getCharactersForColor(color)
    if(!charactersForColor) {
      return <></>
    }
    const decription = ColourDecription[color];
    const reg = new RegExp('^[0-4]')
    let textColor = reg.test(color) ? 'white' : 'black';
    return <div className='color'>
          <div className='block' key={color} style={{color: textColor, backgroundColor: `#${color}`}}>#{color}</div>
          <div className='description'>{decription}</div>
          <div>{charactersForColor}</div>
      </div>
  })

  return (
    <div>
      <h2 className="count">{listColors.length} - unique / {notUniqueColors.length} all colors</h2>
      <div className="App">
        {listColors}
      </div>
    </div>
    );
}

export default Colours;
