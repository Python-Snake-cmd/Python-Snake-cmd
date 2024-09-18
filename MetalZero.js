element.Delta_Metal = {
    color: '#80808e',
    behavior: behaviors.WALL,
    category: 'Zero Metals',
    state: 'solid',
    tempHigh: 85500,
    tempLow: -273,
    stateHigh: 'Molten_Delta_Metal',
    stateLow: 'Frost_Metal',
    density: 590,
}

element.Frost_Metal = {
    color: '#6889cc',
    behavior: behaviors.WALL,
    category: 'Zero Metals',
    state: 'solid',
    temp: -273,
    tempHigh: 0,
    stateHigh: 'Delta_Metal'
}

element.Molten_Delta_Metal = {
    color: "#ff5e00",
    behavior: behaviors.LIQUID,
    category: 'states',
    state: 'liquid',
    temp: 85500,
    Density: 8550,
    stateLow: 'Delta_Metal',
    tempLow: 660,
    flamecolor: '#f59b42'
}
