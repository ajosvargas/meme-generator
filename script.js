const form = document.getElementById('meme-form');
const memeContainer = document.getElementById('meme-container');

memeContainer.addEventListener('click', (e) => {
    if(e.target.innerText === "Delete Image"){
        e.target.parentElement.parentElement.remove();
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const values = [document.querySelector('#url').value, document.querySelector('#top-text').value,document.querySelector('#bottom-text').value];
    let meme = createMeme(values);
    memeContainer.append(meme);
    document.querySelector('#url').value = "";
    document.querySelector('#top-text').value = "";
    document.querySelector('#bottom-text').value = "";
})

function createMeme(arr) {
    let img = document.createElement('div');
    img.classList.add("image-container");
    img.style.backgroundImage = `url("${arr[0]}")`;
    let topText = document.createElement('p');
    topText.classList.add("top-text");
    topText.innerText = arr[1];
    img.append(topText);
    let BottomText = document.createElement('p');
    BottomText.innerText = arr[2]
    BottomText.classList.add("bottom-text");
    img.append(BottomText);
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    let button = document.createElement('p');
    button.classList.add('text');
    button.innerText = "Delete Image";
    overlay.append(button);
    img.append(overlay);
    return img;
}