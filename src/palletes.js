export const Char = {
    Jiraya: 'Jiraya',
    Sukuna: 'Sukuna',
    Madara: 'Madara',
    Ace: 'Ace',
    Dazai: 'Dazai',
    Shikamaru: 'Shikamaru',
    Badji: 'Badji',
    Levi: 'Levi',
    Sasuke: 'Sasuke',
    Naruto: 'Naruto',
    DrStone: 'DrStone',
    Gojo: 'Gojo',
    Zoro: 'Zoro',
    Titan: 'Titan',
    Nezuko: 'Nezuko',
    IandS: 'IandS',
    GandK: 'GandK'
}

export const Sizes = {
    '15x15': '15x15',
    '20x25': '20x25',
    '30x40': '30x40',
}

export const Squares = {
    '15x15': '225',
    '20x25': '500',
    '30x40': '1200',
}

export const PalletesCharSizes ={
    [Char.Jiraya] : Sizes["30x40"],
    [Char.Sukuna] : Sizes["20x25"],
    [Char.Madara] : Sizes["20x25"],
    [Char.Ace] : Sizes["15x15"],
    [Char.Dazai] : Sizes["20x25"],
    [Char.Shikamaru] : Sizes["15x15"],
    [Char.Badji] : Sizes["15x15"],
    [Char.Levi] : Sizes["15x15"],
    [Char.Sasuke] : Sizes["15x15"],
    [Char.Naruto] : Sizes["15x15"],
    [Char.DrStone] : Sizes["15x15"],
    [Char.Gojo] : Sizes["15x15"],
    [Char.Zoro] : Sizes["20x25"],
    [Char.Titan] : Sizes["20x25"],
    [Char.Nezuko] : Sizes["20x25"],
    [Char.IandS] : Sizes["20x25"],
    [Char.GandK] : Sizes["20x25"]
}

export const Palletes2Char = {
    [Char.Jiraya] : ['161616', '662B32', 'E7D4C7', '54A1BD', '286078', '1E4C54', '92B8C5'],
    [Char.Sukuna] : ['E7D4C7', 'D4B6A5', '80695D', '672932', '2E191C', '9393B2', '64647C', '161616', '1A1E21', 'FCFBF9', '33263A', '8C707F', 'E2B3A0', '1E4B53', 'C2C2C4', '2D2D2B'],
    [Char.Madara] : ['FBFAF8', 'C2C2C4', '1A1E21', '161616', '1A1C28', '4C4A74', 'E8D5BD', 'D8AE84', 'C59854', '682A32', '2E191B'],
    [Char.Ace] : ['E2B2A1', 'BC7F6D', '966051', '161616', '903B39', '2E191C'],
    [Char.Dazai] : ['F2F1ED', 'D7DAD9', 'E7D4C7', 'D4B6A5', 'ADA08D', '655D54', '473B36', '2C2824'],
    [Char.Shikamaru] : ['E7D4C7', 'D4B6A5', '436045', '2E3D36', '161616', 'F0EAE5', 'C26F41', '913B39'],
    [Char.Badji] : ['EED3C8', 'E4BBAB', '1A1E21', '161616', '903B39', 'C1BDB8', '8F8F98', 'FCFBF9'],
    [Char.Levi] : ['86848C', '474955', '242329', 'ECE8D5', '83847E', '4F4F4D', '393937', '2D2D2B', 'E7D4C7', 'D4B6A5', 'FBFBFB', '161616'],
    [Char.Sasuke] : ['903B39', 'D4B6A5', 'E7D4C7', 'FCFBF9', '83847E', '4F4F4D', '232522', '1A1E21'],
    [Char.Naruto] : ['F0D552', 'C39952', '682A32', '242329', 'CC9090', 'E4BBAB', '161616', '8F8F98', 'C2C2C4', 'F4F4F2', 'C26F41'],
    [Char.DrStone] : ['7B5C4B', 'D8AE84', 'E4BBAB', 'BC7F6D', '412220', '9D5C40', 'F4F4F2', 'DCDCDC', 'E8D5BD', '645643', '44996F'],
    [Char.Gojo] : ['E7D4C7', 'D4B6A5', '4C4A74', '1A1C28', 'A996AA', 'FCFBF9', '54A1BD'],
    [Char.Zoro] : ['FCFBF9', 'EBCEAF', 'DF946F', 'CC7C5A', 'ECE8D5', 'BBD8C9', '66A086', '244741', '161616', 'BBD7B7', '44996F'],
    [Char.Titan] : ['D4B6A5', '7B5C4B', '473B36', '332F2C', '232522', 'FCFBF9', 'C2C2C4', '8F8F98', 'CC9090', '682A32', '244741'],
    [Char.Nezuko] : ['FCFBF9', 'C2C2C4', '8F8F98', '83847E', '1A2224', '242329', '161616', 'EED3C8', 'E4BBAB', 'C59854', '9B5C40', '903B39', '4C2426', '2E191C', '2F1926', '632E52', 'C56F80', 'E2B0B4', 'AB8F9D'],
    [Char.IandS] : ['FCFBF9', 'C1BDB8', '83847E', 'EED3C8', 'E2B2A1', 'E8D5BD', 'DAAD8D', '668199', '425974', '425974', '1A1E21', '161616', '4E221F', '1E1617'],
    [Char.GandK] : ['FCFBF9', 'D4D2D7', 'C2C2C4', '8F8F98', 'E8D5BD', 'C49958', 'D4B6A5', '7A5B4A', '473C35', '436045', '1E2F35', 'C7C0CA', '9494B3', 'EFDED3', 'E4BBAB', '314079', '333B5C', '1A1E21']
}



export const PalletesChar = {
    [Char.Jiraya] : ['161616', '682A32', 'E7D4C7', '54A1BD', '286078', '1E4C54', '92B8C5'],
    [Char.Sukuna] : ['E7D4C7', 'D4B6A5', '80695D', '682A32', '2E191C', '9494B3', '64647C', '161616', '1A1E21', 'FCFBF9', '33263A', '8C707F', 'E2B2A1', '1E4C54', 'C2C2C4', '2D2D2B'],
    [Char.Madara] : ['FCFBF9', 'C2C2C4', '1A1E21', '161616', '1A1C28', '4C4A74', 'E8D5BD', 'D8AE84', 'C59854', '682A32', '2E191C'],
    [Char.Ace] : ['E2B2A1', 'BC7F6D', '966051', '161616', '903B39', '2E191C'],
    [Char.Dazai] : ['FCFBF9', 'D7DAD9', 'E7D4C7', 'D4B6A5', 'ADA08D', '655D54', '473B36', '2C2824'],
    [Char.Shikamaru] : ['E7D4C7', 'D4B6A5', '436045', '2E3D36', '161616', 'FCFBF9', 'C26F41', '903B39'],
    [Char.Badji] : ['EED3C8', 'E4BBAB', '1A1E21', '161616', '903B39', 'C1BDB8', '8F8F98', 'FCFBF9'],
    [Char.Levi] : ['8F8F98', '474955', '242329', 'ECE8D5', '83847E', '4F4F4D', '393937', '2D2D2B', 'E7D4C7', 'D4B6A5', 'FCFBF9', '161616'],
    [Char.Sasuke] : ['903B39', 'D4B6A5', 'E7D4C7', 'FCFBF9', '83847E', '4F4F4D', '232522', '1A1E21'],
    [Char.Naruto] : ['F0D552', 'C59854', '682A32', '242329', 'CC9090', 'E4BBAB', '161616', '8F8F98', 'C2C2C4', 'FCFBF9', 'C26F41'],
    [Char.DrStone] : ['7B5C4B', 'D8AE84', 'E4BBAB', 'BC7F6D', '412220', '9D5C40', 'FCFBF9', 'D7DAD9', 'E8D5BD', '645643', '44996F'],
    [Char.Gojo] : ['E7D4C7', 'D4B6A5', '4C4A74', '1A1C28', 'A996AA', 'FCFBF9', '54A1BD'],
    [Char.Zoro] : ['FCFBF9', 'EBCEAF', 'DF946F', 'CC7C5A', 'ECE8D5', 'BBD8C9', '66A086', '244741', '161616', 'BBD7B7', '44996F'],
    [Char.Titan] : ['D4B6A5', '7B5C4B', '473B36', '332F2C', '232522', 'FCFBF9', 'C2C2C4', '8F8F98', 'CC9090', '682A32', '244741'],
    [Char.Nezuko] : ['FCFBF9', 'C2C2C4', '8F8F98', '83847E', '1A2224', '242329', '161616', 'EED3C8', 'E4BBAB', 'C59854', '9D5C40', '903B39', '4E221F', '2E191C', '2F1926', '632E52', 'C56F80', 'E2B0B4', 'AB8F9D'],
    [Char.IandS] : ['FCFBF9', 'C1BDB8', '83847E', 'EED3C8', 'E2B2A1', 'E8D5BD', 'DAAD8D', '668199', '425974', '425974', '1A1E21', '161616', '4E221F', '1E1617'],
    [Char.GandK] : ['FCFBF9', 'D4D2D7', 'C2C2C4', '8F8F98', 'E8D5BD', 'C59854', 'D4B6A5', '7B5C4B', '473B36', '436045', '1E2F35', 'C7C0CA', '9494B3', 'EFDED3', 'E4BBAB', '314079', '333B5C', '1A1E21']
}

export const PalletesWithSquare = {
    [Char.Jiraya] : [1, 1, 1, 3, 7, 1, 1 ],
    [Char.Sukuna] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
    [Char.Madara] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [Char.Ace] : [1, 1, 1, 1, 1, 1],
    [Char.Dazai] : [1, 1, 1, 1, 1, 1, 2, 1],
    [Char.Shikamaru] : [1, 1, 1, 1, 1, 1, 1, 1],
    [Char.Badji] : [1, 1, 1, 1, 1, 1, 1, 1],
    [Char.Levi] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [Char.Sasuke] : [1, 1, 1, 1, 1, 1, 1, 1],
    [Char.Naruto] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [Char.DrStone] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [Char.Gojo] : [1, 1, 1, 1, 1, 1, 1],
    [Char.Zoro] : [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [Char.Titan] : [2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [Char.Nezuko] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [Char.IandS] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [Char.GandK] : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}

export const ColourDecription = {
    '682A32': '3red:1yellow:1brown only ROSA',
    '286078': '4blue:1.2white:0.5biryza:0.3black only ROSA',
    '54A1BD': '3blue:3white:0.5biryza:0.1black only ROSA',
    '92B8C5': '3blue:4white:0.1biryza:0.5black only ROSA',
    'E7D4C7': '2telesnogo:1yellow:1red:3white only ROSA'
}

export default {
    PalletesChar,
    Char,
    Squares,
    PalletesWithSquare,
    PalletesCharSizes,
    ColourDecription
}