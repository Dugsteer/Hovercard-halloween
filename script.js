const menu = document.getElementById("menu");
const sidey = document.getElementById("conto");
const blue = window.matchMedia("(max-width: 800px)");

function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}

function toggler() {
  sidey.classList.toggle("block");
}

myFunction(blue);

//CHANGE CARDS
const count = document.getElementById("count");
let imageArt = document.getElementById("image-art");
let imageText = document.getElementById("image-text");

const loader = document.getElementById("loaderDiv");

function stopLoader() {
  loader.classList.add("stop");
}

setTimeout(stopLoader, 1000);

var imageList = [
  "bat.jpg",
  "black-cat.jpg",
  "broomstick.jpg",
  "candy.jpg",
  "cauldron.jpg",
  "clown.jpg",
  "fancy-dress.jpg",
  "Frankenstein.jpg",
  "ghost.jpg",
  "monster.jpg",
  "moon.jpg",
  "mummy.jpg",
  "pumpkin.jpg",
  "skeleton.jpg",
  "skull.jpg",
  "vampire.jpg",
  "werewolf.jpg",
  "witch.jpg",
  "wizard.jpg",
  "zombie.jpg",
];

let y = imageText.innerHTML;
let z = y.concat(".jpg");
let x = imageList.indexOf(z);

function goForwards() {
  if (x < imageList.length - 1) {
    x++;
    imageArt.src = `/img/${imageList[x]}`;
    imageText.textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[imageList.length - 1]}`;
    imageText.textContent = `${imageList[imageList.length - 1].slice(0, -4)}`;
    count.innerHTML = `${imageList.length}/${imageList.length}`;
    x = 0;
    x = imageList.length - 1;
    return x;
  }
}

function goBackwards() {
  if (x > 0) {
    x--;
    imageArt.src = `/img/${imageList[x]}`;
    imageText.textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[0]}`;
    imageText.textContent = `${imageList[0].slice(0, -4)}`;
    count.innerHTML = `${1}/${imageList.length}`;
    x = 0;
    return x;
  }
}

goForwards();
goBackwards();
