const seedColorInput = document.getElementById('seed-color');
const btnEl = document.getElementById('get-color-btn');
const colorSchemesEl = document.getElementById('color-schemes-container');

const getSeedColor = () => seedColorInput.value.slice(1);

seedColorInput.addEventListener('change', getSeedColor);

const getColorScheme = () => {
    const schemeMode = document.getElementById('color-schemes').value;
    colorSchemesEl.innerHTML = '';

    //API Call
    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&format=json&mode=${schemeMode.toLowerCase()}&count=5`)
        .then(res => res.json())
        .then (data => {
            data.colors.forEach(color => {
            const colorCols = document.createElement('div');
            colorCols.style.backgroundColor = color.hex.value;
            colorSchemesEl.append(colorCols)
          });
        })
}


btnEl.addEventListener('click', getColorScheme)

