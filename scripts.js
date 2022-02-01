//Counter variable
let counter = 0;

//html element selectors
const counterElement = document.getElementById('counter');
const removeButton = document.getElementById('remove');
const addButton = document.getElementById('add');
const starContainer = document.querySelector('.star-container');

//Stars
const starComponent = () => {
    const star = document.createElement('div');
    star.innerHTML = `<img class="star-image" src="./star.svg" alt="star image" />`;  

    return star;
}

//Counter function
const updateCounter = (input) => {
    counter = input;
    counterElement.innerText = counter;
}

//Event listeners for add and remove buttons 
removeButton.addEventListener('click', () => {
    updateCounter(counter - 1);
    if (counter >= 0) {
        starContainer.removeChild(starContainer.lastElementChild);
    }
})

addButton.addEventListener('click', () => {
    updateCounter(counter + 1);
    if (counter > 0) {
        starContainer.appendChild(starComponent());
    }    
})