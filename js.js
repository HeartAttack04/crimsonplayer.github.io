const song = new Audio('1.mp3');
var username = 'H3art4ttack';

var timeH2 = document.getElementById('timeOfDay');
var player = document.getElementById('player');

function getTime(){
    var today = new Date()
    var curHr = today.getHours()

    if (curHr > 7 && curHr < 12) {
        timeH2.innerHTML = 'Good Morning,' + '<p class="accountName">' + username + '</p>';
    } else if (curHr > 12 && curHr < 18) {
        timeH2.innerHTML = 'Good Afternoon,' + '<p class="accountName">' + username + '</p>';
    } else if(curHr > 18) {
        timeH2.innerHTML = 'Good Evening,' + '<p class="accountName">' + username + '</p>';
    } else{
        timeH2.innerHTML = 'Quite Early,' + '<p class="accountName">' + username + '</p>';
    }
}

function pustiPesmu(lipesme,rbrPesme){
    makeAllBackgrounds();
    song.src = rbrPesme + ".mp3";
    if(song.paused || song.currentTime <= 0){
        playMusic();
        lipesme.style.backgroundColor = "rgba(255, 166, 0, 0.4)";
        lipesme.classList.add("active");
    }
    else{
        stopMusic();
        lipesme.classList.remove("active");
    }
}

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.backgroundColor = "transparent";
    })
}

const makeAllPlayes = () =>{
    Array.from(document.getElementsByClassName('bi bi-play')).forEach((element)=>{
        element.classList.remove('bi-pause');
        element.classList.add('bi-play');
    })
}

var masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=>{
    if(song.paused || song.currentTime <= 0){
        playMusic();
    }else{
        stopMusic();
    }
})

function playMusic(){
    player.style.display = 'block';
    song.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
}
function stopMusic(){
    song.pause();
    masterPlay.classList.add('bi-play-circle');
    masterPlay.classList.remove('bi-pause-circle');
}

song.addEventListener('ended', ()=>{
    stopMusic();
})

song.addEventListener('pause', ()=>{
    stopMusic();
})

var songTime = document.getElementById("songTime");
var customDot = document.getElementById("customDot");
var customFollow = document.getElementById("customFollow");

song.addEventListener('timeupdate', ()=>{

    let progressBar = parseInt((song.currentTime/song.duration)*100);
    songTime.value = progressBar;
    if(progressBar >= 99.5){
        customDot.style.left = "99.6%";
    }else{
        customDot.style.left = progressBar + "%";
    }
    customFollow.style.width = progressBar + "%";
})

songTime.addEventListener('change', ()=>{
    song.currentTime = songTime.value * song.duration / 100;
})
