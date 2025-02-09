const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');



// add event
btn.addEventListener('click', (e) => {
    if(input.value === '') return;
    createDeleteElement(input.value);
    input.value = '';
})


// create and delete
function createDeleteElement(value) {
    console.log(value);

    const li = document.createElement('li');
    const btn = document.createElement('btn');

    li.className = 'li';
    li.textContent = value;

    btn.className = 'btn';
    btn.textContent = 'X';

    li.appendChild(btn); 

    // remove item
    btn.addEventListener('click', (e) => {
        console.log(li);

        result.removeChild(li);
    })   

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active');
    })

    result.appendChild(li);
}