

function playing(e){  // takes e as an event
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  // get audio element having data-key ;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    //get key code whose have data-key

    if(!audio) return;  // if audio is not present means no data-key so return;
    audio.currentTime = 0;  // replay if sound is not end
    audio.play();
    key.classList.add('playing'); // adding animation class to the div
}

 
window.addEventListener('keydown',playing);  // on keydown trigger funtion playing

function removeTransition(e){               // remove animatioin affter certain delay on css
    if( e.propertyName != 'transform') return;  // only property targated is transition
    this.classList.remove('playing');  // remove animation class
}

const keys = document.querySelectorAll('.key');   //keys of array 
keys.forEach(key => key.addEventListener('transitionend' ,removeTransition)); // remove transion event 

