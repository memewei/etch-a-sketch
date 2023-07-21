var grid = document.getElementById('grid');
const defaultSize = 16;
const currentColor = '#333333';
const toggleBtn = document.querySelector('.toggle');
const checkBox = document.querySelector('#checkbox');
const clearGridBtn = document.querySelector("#clear");
const newSize = document.querySelector('#new-size');
var mode1 = 'mouseenter';
var mode2 = '';
var switchMode = true;
let currentSize = defaultSize;


toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle("active");
    mode1 = 'mousedown';
    mode2 = 'mouseover';
    return mode1;
});
clearGridBtn.addEventListener('click', () => refreshGrid());
newSize.addEventListener('click', () => {
    setNewSize();
    refreshGrid();
});


console.log(mode1);
console.log(mode2);
function buildGrid(e){
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;

    for(i=0; i < currentSize * currentSize; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        gridDiv.addEventListener(mode1, changeColor);
        gridDiv.addEventListener(mode2, changeColor);
        grid.appendChild(gridDiv);
    }
}

function setNewSize(value){
    currentSize = prompt("What size will your new grid be? Maximum: 100");
    return currentSize;
}

function clearGrid(){
    grid.innerHTML = " ";
}

function refreshGrid(){
    clearGrid();
    buildGrid(currentSize);
}

function changeColor(e){
    if(e.type === 'mouseenter'){
        e.target.style.backgroundColor = currentColor;
    }else if(e.type === 'mousedown'){
        e.target.style.backgroundColor = currentColor;
    }else{
        return;
    }
}

window.onload = () =>{
    buildGrid(currentSize);
}