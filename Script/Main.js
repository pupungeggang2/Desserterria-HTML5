window.onload = main;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById('Screen');
    context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    window.addEventListener('keydown', keyDown, false);
    window.addEveneListener('keyup', keyUp, false);

    gameFrameCurrent = Date.now();
    gameFramePrevious = Date.now() - 16;
    delta = 16;

    gameInstance = requestAnimationFrame(loop);
}

function loop() {
    gameFrameCurrent = Date.now();
    delta = gameFrameCurrent - gameFramePrevious;

    gameFramePrevious = Date.now();
    gameInstance = requestAnimationFrame(loop);
}

function errorHandle() {
    cancelAnimationFrame(gameInstance);
}

function rightClick() {
    return false;
}