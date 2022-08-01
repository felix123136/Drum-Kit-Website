const buttons = document.querySelectorAll('.drum');
for(let button of buttons) {
    button.addEventListener('click', () => {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 200);
        if(button.classList.contains('w')) {
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
        }else if(button.classList.contains('a')) {
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }else if(button.classList.contains('s')) {
            let audio = new Audio('sounds/snare.mp3');
            audio.play();
        }else if(button.classList.contains('d')) {
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }else if(button.classList.contains('j')) {
            let audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }else if(button.classList.contains('k')) {
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }else if(button.classList.contains('l')) {
            let audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
    })
}
window.addEventListener('keydown', function(e) {
    const buttonClass = `.${e.key}`;
    const button = document.querySelector(buttonClass);
    button.classList.add('pressed');
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 200);
    if(e.key === 'w') {
        let audio = new Audio('sounds/crash.mp3');
        audio.play();
    }else if(e.key === 'a') {
        let audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }else if(e.key === 's') {
        let audio = new Audio('sounds/snare.mp3');
        audio.play();
    }else if(e.key === 'd') {
        let audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }else if(e.key === 'j') {
        let audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }else if(e.key === 'k') {
        let audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }else if(e.key === 'l') {
        let audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
})