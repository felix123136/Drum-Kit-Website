const buttons = document.querySelectorAll('.drum');

function playSound(key) {
    if(key === 'w') {
        createjs.Sound.registerSound('sounds/crash.mp3', 'crash');
        createjs.Sound.play('crash');
    }else if(key === 'a') {
        createjs.Sound.registerSound('sounds/kick-bass.mp3', 'kick-bass');
        createjs.Sound.play('kick-bass');
    }else if(key === 's') {
        createjs.Sound.registerSound('sounds/snare.mp3', 'snare');
        createjs.Sound.play('snare');
    }else if(key === 'd') {
        createjs.Sound.registerSound('sounds/tom-1.mp3', 'tom-1');
        createjs.Sound.play('tom-1');
    }else if(key === 'j') {
        createjs.Sound.registerSound('sounds/tom-2.mp3', 'tom-2');
        createjs.Sound.play('tom-2');
    }else if(key === 'k') {
        createjs.Sound.registerSound('sounds/tom-3.mp3', 'tom-3');
        createjs.Sound.play('tom-3');
    }else if(key === 'l') {
        createjs.Sound.registerSound('sounds/tom-4.mp3', 'tom-4');
        createjs.Sound.play('tom-4');
    }
}

for(let button of buttons) {
    button.addEventListener('click', () => {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 200);
        playSound(button.innerText);
    })
}
addEventListener('keydown', function(e) {
    const button = document.querySelector(`.${e.key}`);
    button.classList.add('pressed');
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 200);
    playSound(e.key);
})
