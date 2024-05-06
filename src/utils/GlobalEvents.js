var CTRL_KEY_DOWN = false;

function HandleKeyDown(key) {
    if (key.code === 'ControlLeft') {
        CTRL_KEY_DOWN = true;
    }

    if (key.code === 'Minus') {
        console.log('Brightening');
        BrightenShape();
    } else if (key.code === 'Equal') {
        console.log('Darkening');
        DarkenShape();
    }
}

function HandleKeyUp(key) {
    if (key.code === 'ControlLeft') {
        CTRL_KEY_DOWN = false;
    }
}
