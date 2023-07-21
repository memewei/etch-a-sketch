var grid = document.getElementById('grid');
const size = 16;
const currentColor = '#333333';


function buildGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i=0; i < size * size; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        gridDiv.addEventListener('mouseenter', changeColor);
        grid.appendChild(gridDiv);
        console.log("ok");
    }
}

function changeColor(e){
    if(e.type === 'mouseenter'){
        e.target.style.backgroundColor = currentColor;
    }else{
        return;
    }
}

window.onload = () =>{
    buildGrid(size);
}