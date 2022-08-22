const song = new Audio('1.mp3');

function pustiPesmu(lipesme,rbrPesme){
    makeAllbackgrounds();
    song.src = rbrPesme + ".mp3";
    if(song.paused || song.currentTime <= 0){
        playMusic();
        lipesme.style.backgroundColor = "rgba(119, 0, 255, 0.4)";
        lipesme.classList.add("active");
    }
    else{
        stopMusic();
        lipesme.classList.remove("active");
    }
}

const makeAllbackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.backgroundColor = "transparent";
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

var songTime = document.getElementById("songTime");
var customDot = document.getElementById("customDot");
var customFollow = document.getElementById("customFollow");

song.addEventListener('timeupdate', ()=>{

    let progressBar = parseInt((song.currentTime/song.duration)*100);
    songTime.value = progressBar;
    customDot.style.left = progressBar + "%";
    customFollow.style.width = progressBar + "%";
})

songTime.addEventListener('change', ()=>{
    song.currentTime = songTime.value * song.duration / 100;
})
