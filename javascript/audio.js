//Audio
var audio = document.getElementById("audio");

//Play button
function playbutton() {
    audio.play();
}

//Pause button
function pausebutton() {
    audio.pause();
}

//Audio autoplays when user clicks on the play button
var autoplay = false;
onclick = function () {
    if (!autoplay) {
        document.querySelectorAll('audio').forEach(audio => {
            audio.play();
        });
        autoplay = true;
    }
}