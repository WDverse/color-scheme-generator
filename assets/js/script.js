const seedColorInput = document.getElementById('seed-color');
const btnEl = document.getElementById('get-color-btn');

const getSeedColor = () => {
    return seedColorInput.value;
}

seedColorInput.addEventListener('change', getSeedColor);



const getColorScheme = () => {
    //complete API Call
}


btnEl.addEventListener('click', getColorScheme)

