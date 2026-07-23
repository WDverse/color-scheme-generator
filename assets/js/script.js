const seedColorInput = document.getElementById('seed-color');
const btnEl = document.getElementById('get-color-btn');
const hexValuesEl = document.getElementById('hex-values');
const colorSchemesEl = document.getElementById('color-schemes-container');


 fetch(`https://www.thecolorapi.com/scheme?hex=1a1919&format=json&mode=monochrome&count=5`)
        .then(res => res.json())
        .then (data => {
          console.log(data.colors)
            data.colors.forEach(color => {
            const colorCols = document.createElement('div');
            const hexValues = document.createElement('span');
            hexValues.textContent = color.hex.value;
            colorCols.style.backgroundColor = color.hex.value;
            hexValuesEl.append(hexValues);
            colorSchemesEl.append(colorCols);
          });
        })

const getSeedColor = () => seedColorInput.value.slice(1);

seedColorInput.addEventListener('change', getSeedColor);

const getColorScheme = () => {
    const schemeMode = document.getElementById('color-schemes').value;
    colorSchemesEl.innerHTML = '';
    hexValuesEl.innerHTML = '';

    //API Call
    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&format=json&mode=${schemeMode.toLowerCase()}&count=5`)
        .then(res => res.json())
        .then (data => {
          console.log(data.colors)
            data.colors.forEach(color => {
            const colorCols = document.createElement('div');
            const hexValues = document.createElement('span');
            hexValues.textContent = color.hex.value;
            colorCols.style.backgroundColor = color.hex.value;
            hexValuesEl.append(hexValues);
            colorSchemesEl.append(colorCols);
          });
        })
}


btnEl.addEventListener('click', getColorScheme)

