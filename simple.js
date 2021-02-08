const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const clickBtn = document.querySelector('.clickBtn');
const text = document.querySelector('.color-name');


function randomcolors(){
    return Math.floor(Math.random() * colors.length);
}

clickBtn.addEventListener('click', () => {
    const randomNumber = randomcolors();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber];
})