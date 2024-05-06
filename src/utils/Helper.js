function CreateGenericShape(parentNode, shapeName, backgroundColor='red') {
    const shape = document.createElement('div');
    shape.className = shapeName;
    shape.style.backgroundColor = `rgb(${0},${0},${0})`;
    shape.id = 'player';
    parentNode.appendChild(shape); 
}

var COLOR_SKIP = 7;

function BrightenShape() {
    ApplyShade(true);
}

function DarkenShape() {
    ApplyShade(false);
}

function ApplyShade(increase) {
    let target = document.getElementById('player');
    let rgbColor = getRGBColor(target);
    let updatedColor = increase ? getIncreasedShade(rgbColor) : getDecreasedShade(rgbColor);
    target.style.backgroundColor = updatedColor;
}

function getIncreasedShade(rgbColor) {
    redColor = rgbColor[0];
    greenColor = rgbColor[1];
    blueColor = rgbColor[2];
    if (rgbColor[0] < 255 - COLOR_SKIP) {
        redColor += COLOR_SKIP;
    } else if (rgbColor[1] < 255 - COLOR_SKIP) {
        greenColor += COLOR_SKIP;
    } else if (rgbColor[2] < 255 - COLOR_SKIP) {
        blueColor += COLOR_SKIP;
    } else {
        redColor = redColor % 255;
        greenColor = greenColor % 255;
        blueColor = blueColor % 255;
    }

    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

function getDecreasedShade(rgbColor) {
    redColor = rgbColor[0];
    greenColor = rgbColor[1];
    blueColor = rgbColor[2];
    if (rgbColor[0] >= COLOR_SKIP) {
        redColor -= COLOR_SKIP;
    } else if (rgbColor[1] >= COLOR_SKIP) {
        greenColor -= COLOR_SKIP;
    } else if (rgbColor[2] >= COLOR_SKIP) {
        blueColor -= COLOR_SKIP;
    } else {
        redColor = greenColor = blueColor = 255;
    }

    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

function getRGBColor(target) {
    let colorString = target.style.backgroundColor;
    let i = 0;
    while (colorString.charAt(i) !== '(') {
        i++;
    }
    
   let colors = colorString.substring(i + 1, colorString.length - 1).split(',');
   colors = colors.map(element => Number(element));
   return colors;
}