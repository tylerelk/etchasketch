//Get elements from index.html
const body = document.querySelector('#body');

//Style body to center wrapper
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

//Create and place required elements
const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
body.appendChild(wrapper);
function createSquares() {
    for (let s = 0; s < (16 * 16); s++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.style.width = '6%';
        square.style.height = '6%';
        square.style.margin = '0';
        square.style.padding = '0';
        square.classList.add('square');
        wrapper.appendChild(square);
    }
}
window.onload = createSquares();
const squares = document.getElementsByClassName('square');

//Style wrapper
wrapper.style.backgroundColor = 'black';
wrapper.style.width = '80vw';
wrapper.style.height = '80vh';
wrapper.style.border = '2px solid black';
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.justifyContent = 'space-around';
wrapper.style.alignItems = 'center';

//Create mouseover effect

