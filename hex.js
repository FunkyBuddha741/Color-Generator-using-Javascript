const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickBtn = document.querySelector('.clickBtn');
const text = document.querySelector('.color-name');

function randomizer(){
    return Math.floor(Math.random() * hex.length);
}

clickBtn.addEventListener('click', () => {
    let randomNumber = `#`;
    for( let i = 0; i < 6; i++){
        randomNumber += hex[randomizer()];
    }
    document.body.style.backgroundColor = randomNumber;
    text.textContent = randomNumber;
})



