let color = 'black';

function createPad(size){
    if (size>=2 && size <=100){
let sketchpad = document.getElementById('sketchpad');
let pixels = sketchpad.querySelectorAll('div');
pixels.forEach((div) => div.remove())
sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
sketchpad.style.gridTemplateRows = `repeat(${size}, 1 fr)`;

for (i=0; i<(size*size); i++){
    let box = document.createElement('div');
    sketchpad.insertAdjacentElement('beforeend', box);
    box.addEventListener('mouseover', colorChange)
}} else {
    alert('Size must be greater than 2 and no more than 100')
}};

function colorChange(){
    if (color === 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random()*350}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    };
}

function colorSet(x){
    color = x;
};