//Get elements from index.html
const body = document.querySelector('#body');

//Style body to center wrapper
body.style.width = '100vw';
body.style.height = '100vh';
body.style.display = 'flex';
body.style.justifyContent = 'space-around';
body.style.alignItems = 'center';
body.style.flexDirection = 'column-reverse';

//Create and place required elements
const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
body.appendChild(wrapper);
function createSquares(size) {
    let squareWidth = 100/size + '%';
    let squareHeight = 100/size + '%';

    for (let s = 0; s < (size * size); s++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.style.width = squareWidth;
        square.style.height = squareHeight;
        square.style.margin = '1px';
        square.style.padding = '0';
        square.classList.add('square');
        wrapper.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'gray';
        })
    }
}
window.onload = createSquares(16);

//Style wrapper
wrapper.style.backgroundColor = 'lightgray';
wrapper.style.width = '90vw';
wrapper.style.height = '90vh';
wrapper.style.border = '2px solid black';
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.justifyContent = 'space-around';
wrapper.style.alignItems = 'center';

//Allow user to define grid dimmensions
let resizeButton = document.createElement('button');
resizeButton.textContent = 'GENERATE GRID';
resizeButton.style.padding = '20px';
window.onload = body.appendChild(resizeButton);
resizeButton.addEventListener('click', () => {
    while (wrapper.hasChildNodes())
    wrapper.removeChild(wrapper.firstChild);
    createSquares(prompt('Enter a size'));
})