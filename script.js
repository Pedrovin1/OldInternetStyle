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

function sendMail(){
    const mail = document.getElementById("oldmailimg");
    const sound = new Audio("./assets/yougotmail.mp3")    
    
    if(!mail.classList.contains('mailappears'))
    {
        mail.classList.add('mailappears');
        mail.addEventListener('animationend', () => { sound.play() }, { once: true })
    }
}

function toggleMail(){
    const mailmessage = document.getElementById('mailmessage');
    if(mailmessage.style.display.toString() == 'none' ||
        mailmessage.style.display.toString() == ''){
        mailmessage.style.display = 'block'
    }else{
        mailmessage.style.display = 'none'
    }
}