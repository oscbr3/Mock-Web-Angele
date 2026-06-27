// grab the elements from the html
const audio = document.getElementById('site-audio');
const muteBtn = document.getElementById('mute-toggle');
const waveVisual = document.getElementById('wave-visual');

// listen for a click on the mute button
muteBtn.addEventListener('click', () => {
    
    // if the audio is currently paused play it
    if (audio.paused) {
        audio.play();
        // swap icon to unmuted variant
        muteBtn.src = 'images/micon.svg';
        // add the css classes to start the animation and fix opacity
        waveVisual.classList.add('is-playing');
        muteBtn.classList.add('is-playing');
    } 
    // if it is playing pause it
    else {
        audio.pause();
        // swap icon back to muted variant
        muteBtn.src = 'images/micoff.svg';
        // remove the css classes to stop the animation
        waveVisual.classList.remove('is-playing');
        muteBtn.classList.remove('is-playing');
    }
});