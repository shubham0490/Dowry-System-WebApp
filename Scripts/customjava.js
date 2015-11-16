var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");
var muteButton = document.querySelector("#polina #sound");

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function () {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
});


pauseButton.addEventListener("click", function () {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
    } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
    }
});

muteButton.addEventListener("click", function () {
    if (vid.volume = 1) {
        vid.volume = 0;
        
    } else {
        vid.volume = 1;
        vid.load();
        muteButton.innerHTML = "Mute";
    }
});


//function enableControls() {
//    vid.volume = 0;
//    vid.load();
//}

//function disableControls() {
//    vid.volume = 1;
//    vid.load();
//}

//function checkControls() {
//    alert(vid.controls);
//}
