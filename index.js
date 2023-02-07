function createPad(size){
let sketchpad = document.getElementById('sketchpad');
sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
sketchpad.style.gridTemplateRows = `repeat(${size}, 1 fr)`;

for (i=0; i<(size*size); i++){
    let box = document.createElement('div');
    sketchpad.insertAdjacentElement('beforeend', box);
}
}

