let pixels = document.querySelectorAll('.pixel');
pixels.forEach (function(node) {
    console.log(node.nodeName);
    node.addEventListener("mouseenter", (event) => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
    });
});

function onSubmit () {
    let userInput = document.querySelector('#input_count').value;
    createPixel(userInput);
    return;
}

function createPixel (userInput) {
    let container = document.querySelector(".grid_container");

    //reset to blank
    removeAllChildNodes(container);

    let pixelCount = userInput ** 2;
    let percenPixelPerWidth = (100 / Math.sqrt(pixelCount)); 
    
    for (let i = 0; i < pixelCount; i++) {
        let pixel = document.createElement('div');
        pixel.className = "pixel";
        pixel.style.flex = `1 0 ${percenPixelPerWidth}%`;
        pixel.addEventListener("mouseenter", (event) => { 
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = "#" + randomColor;
        });
        container.appendChild(pixel);
    }
    return;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

