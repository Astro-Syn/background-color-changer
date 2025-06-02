const button = document.querySelector('button')

const getColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const changeBackgroundColor = () => {
    document.body.style.backgroundColor = getColor();
}


button.onclick = changeBackgroundColor;