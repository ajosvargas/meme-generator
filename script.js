const form = document.getElementById("meme-form");
const memeContainer = document.getElementById("meme-container");

function buttonListener(el){
    el.addEventListener('click',(e) =>{
        e.target.parentElement.parentElement.remove();
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const values = {
    url: document.querySelector("#url"),
    topText: document.querySelector("#top-text"),
    bottomText: document.querySelector("#bottom-text")
  };
  let meme = createMeme(values);
  memeContainer.append(meme);
  values["url"].value = "";
  values["topText"].value = "";
  values["bottomText"].value = "";
});

function createMeme(obj) {
    let img = document.createElement('div');
    img.classList.add("image-container");
    img.style.backgroundImage = `url("${obj['url'].value}")`;
    let topText = document.createElement('p');
    topText.classList.add("top-text");
    topText.innerText = obj['topText'].value;
    img.append(topText);
    let BottomText = document.createElement('p');
    BottomText.innerText = obj['bottomText'].value;
    BottomText.classList.add("bottom-text");
    img.append(BottomText);
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    let button = document.createElement('p');
    buttonListener(button);
    button.classList.add('text');
    button.innerText = "Delete Image";
    overlay.append(button);
    img.append(overlay);
    return img;
}
