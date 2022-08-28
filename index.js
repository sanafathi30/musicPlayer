//

let musics = [{
        name: "music1",
        typeFormat: "MP3",
        src: "/musicPlayer/audio/music0.mp3",
    },
    {
        name: "googooshe",
        typeFormat: "MP3",
        src: "/musicPlayer/audio/music1.mp3",
    },
    {
        name: "mohsen chavoshi",
        typeFormat: "MP3",
        src: "/musicPlayer/audio/music2.mp3",
    },
    {
        name: "shadmehr aghali",
        typeFormat: "MP3",
        src: "/musicPlayer/audio/music3.mp3",
    },
];

let playBtn = document.querySelector(".play");
let forword = document.querySelector(".forward");
let reword = document.querySelector(".rewired");
let songName = document.querySelector("#music-name");
let singerName = document.querySelector("#singer");
let song = document.querySelector(".music");
let currentTime = document.querySelector(".currentTime");
let duretionTime = document.querySelector(".duration");
let timeBar = document.querySelector(".input");
let songList = document.querySelector(".songList");
let repeat = document.querySelector(".repeat");
let musicList = document.querySelector(".musicList");
let close = document.querySelector(".close");
let isPlaying = true;

// setDuretion();
setInterval(setcurrentTime, 1000);

playBtn.addEventListener("click", function() {
    if (isPlaying) {
        song.play();
        isPlaying = false;
    } else {
        song.pause();
        isPlaying = true;
    }
});

function setcurrentTime() {
    let min = Math.floor(song.currentTime / 60);
    let sec = Math.floor(song.currentTime - min * 60);

    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    currentTime.textContent = `${min} : ${sec}`;
}

song.addEventListener("timeupdate", function() {
    let barlength = Math.floor((song.currentTime / song.duration) * 100);
    timeBar.value = `${barlength}`;
    timeBar.style = ` backgroundColor : linear-gradient(90deg, rgba(230, 126, 34, 1) ${barlength}%, #e1e1e1 0%)`;
    setDuretion();
});

let isrepead = false;
repeat.addEventListener("click", function() {
    if (!isrepead) {
        song.loop = true;
        console.log("jji");
        isrepead = true;
    } else {
        audioElement.loop = false;
        isrepead = false;
    }
});

musicList.addEventListener("click", function() {
    let songList = document.querySelector(".songList");
    songList.classList.toggle("d-none");
});

close.addEventListener("click", function() {
    songList.classList.toggle("d-none");
});

//

let songItems = document.querySelectorAll(".songItem");
let musicName = document.querySelectorAll(".musicName");
let singerName1 = document.querySelector(".singerName");
let musicTime = document.querySelectorAll(".musicTime");
let songs = document.querySelectorAll(".songs");

musicName.forEach(function(item, index) {
    item.textContent = musics[index].name;
});

musicTime.forEach(function(item, index) {
    let min = Math.floor(songs[index].duration / 60);
    let sec = Math.floor(songs[index].duration - min * 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    item.textContent = `${min} : ${sec}`;
});
var d = 0;
songItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
        song.setAttribute("src", musics[index].src);

        d = index;
        song.play();
        songList.classList.toggle("d-none");
        songName.textContent = musics[index].name;
    });
});

forword.addEventListener("click", function() {
    console.log(d);
    if (d === 3) {
        d = 0;
        song.pause();
        song.setAttribute("src", `/musicPlayer/audio/music${d}.mp3`);
        console.log(song);
        songName.textContent = musics[d].name;
        song.play();
    } else {
        d = d + 1;
        song.pause();
        song.setAttribute("src", `/musicPlayer/audio/music${d}.mp3`);
        console.log(song);
        songName.textContent = musics[d].name;
        song.play();
    }
});

function setDuretion() {
    let min = Math.floor(song.duration / 60);
    let sec = Math.floor(song.duration - min * 60);

    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    console.log(min, sec);
    duretionTime.textContent = `${min} : ${sec}`;
}