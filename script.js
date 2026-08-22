function onMonkeyClicked(){
    const monkey = document.getElementById("purplemonkey");
    monkey.classList.add('monkeyRotate')

    monkey.addEventListener('animationend', 
            () => { monkey.classList.remove('monkeyRotate')},
            { once: true} );
}

function removeVirus(){
    const virusPopUp = document.getElementById('virus')
    virusPopUp.classList.remove('viruspopupanimation')
}

function msnNotification(){
    const sound = new Audio("./assets/msn-sound_1.mp3");
    sound.play();

    const msnNotifIcon = document.getElementById("msnNotif47");
    msnNotifIcon.style.opacity = "100%";
}