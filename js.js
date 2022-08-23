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

var currentSongName = document.getElementById('currentSongName');
var currentSongCreator = document.getElementById('currentSongCreator');
var currentSongBanner = document.getElementById('songBanner');

function pustiPesmu(lipesme,rbrPesme){
    makeAllBackgrounds();
    song.src = rbrPesme + ".mp3";
    if(song.paused || song.currentTime <= 0){
        deca = lipesme.children;
        currentSongBanner.src = deca[0].src;
        deca2 = deca[1].children;
        currentSongName.innerHTML = deca2[0].innerHTML;
        currentSongCreator.innerHTML = deca2[1].innerHTML;
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
    if(progressBar >= 99){
        customDot.style.left = "98.5%";
    }else{
        customDot.style.left = progressBar + "%";
    }
    customFollow.style.width = progressBar + "%";
})

songTime.addEventListener('change', ()=>{
    song.currentTime = songTime.value * song.duration / 100;
})

var songBanner = document.getElementsByClassName('songBanner')[0];
var currentSong = document.getElementsByClassName('currentSong')[0];
var exitBigPlayer = document.getElementsByClassName('exitBigPlayer')[0];
var playercontrols = document.getElementsByClassName('playercontrols')[0];
var backButton = document.getElementById('back');
var nextButton = document.getElementById('next');
var customSeek = document.getElementById('customSeek');
var customFollow = document.getElementById('customFollow');
var customDot = document.getElementById('customDot');
var songTime = document.getElementById('songTime');

function openBigPlayer(){
    player.classList.add('activeplayer');
    currentSong.classList.add('activecur');
    songBanner.classList.add('activeimg');
    exitBigPlayer.classList.add('activexit');
    backButton.style.display = 'block';
    nextButton.style.display = 'block';
    playercontrols.classList.add('activeplcntrls');
    customSeek.classList.add('activeseek');
    customFollow.classList.add('activefollow');
    customDot.classList.add('activedot');
    songTime.classList.add('activesongtime');
}

function closeBigPlayer(){
    player.classList.remove('activeplayer');
    currentSong.classList.remove('activecur');
    songBanner.classList.remove('activeimg');
    exitBigPlayer.classList.remove('activexit');
    backButton.style.display = 'none';
    nextButton.style.display = 'none';
    playercontrols.classList.remove('activeplcntrls');
    customSeek.classList.remove('activeseek');
    customFollow.classList.remove('activefollow');
    customDot.classList.remove('activedot');
    songTime.classList.remove('activesongtime');
}
