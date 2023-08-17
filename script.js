let boom = document.getElementById('boom');
let clap = document.getElementById('clap');
let hihat = document.getElementById('hihat');
let kick = document.getElementById('kick');
let openhat = document.getElementById('openhat');
let ride = document.getElementById('ride');
let snare = document.getElementById('snare');
let tink = document.getElementById('tink');
let tom = document.getElementById('tom');

// makes the noise when the sound is clicked 
boom.addEventListener('click',() => {
    new Audio ('./sounds/boom.wav').play();
})  
clap.addEventListener('click',() => {
    new Audio ('./sounds/clap.wav').play();
})  
hihat.addEventListener('click',() => {
    new Audio ('./sounds/hihat.wav').play();
})  
kick.addEventListener('click',() => {
    new Audio ('./sounds/kick.wav').play();
})  
openhat.addEventListener('click',() => {
    new Audio ('./sounds/openhat.wav').play();
})  
ride.addEventListener('click',() => {
    new Audio ('./sounds/ride.wav').play();
})  
snare.addEventListener('click',() => {
    new Audio ('./sounds/snare.wav').play();
})  
tink.addEventListener('click',() => {
    new Audio ('./sounds/tink.wav').play();
})  
tom.addEventListener('click',() => {
    new Audio ('./sounds/tom.wav').play();
})  

// makes sound when the letter key is pressed 
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 97) {
        new Audio ('./sounds/boom.wav').play();  
    }else if (e.keyCode == 115) {
        new Audio ('./sounds/clap.wav').play();
    } else if (e.keyCode == 100) {
        new Audio ('./sounds/hihat.wav').play();
    }else if (e.keyCode == 102) {
        new Audio ('./sounds/kick.wav').play();
    }else if (e.keyCode == 103) {
        new Audio ('./sounds/openhat.wav').play();
    }else if (e.keyCode == 104) {
        new Audio ('./sounds/ride.wav').play();
    }else if (e.keyCode == 106) {
        new Audio ('./sounds/snare.wav').play();
    }else if (e.keyCode == 107) {
        new Audio ('./sounds/tink.wav').play();
    }else if (e.keyCode == 108) {
        new Audio ('./sounds/tom.wav').play();
    }
})